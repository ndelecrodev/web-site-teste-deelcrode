import { prefersReducedMotion } from '@/lib/motion';

const COUNT_DURATION = 1400;
const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

const runCounter = (element: HTMLElement): void => {
  const target = Number(element.dataset['count']);
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const tick = (now: number): void => {
    const progress = Math.min((now - start) / COUNT_DURATION, 1);
    element.textContent = String(Math.round(target * easeOutExpo(progress)));
    if (progress < 1) requestAnimationFrame(tick);
  };
  element.textContent = '0';
  requestAnimationFrame(tick);
};

/**
 * Revela elementos ao entrar na viewport (as transições ficam em CSS), dispara os contadores
 * e liga/desliga loops (marquee, diagramas) conforme a visibilidade e o estado da aba.
 */
export const initReveal = (): void => {
  const loops = document.querySelectorAll<HTMLElement>('[data-marquee], [data-loop]');
  const loopObserver = new IntersectionObserver((entries) =>
    entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
  );
  loops.forEach((loop) => loopObserver.observe(loop));
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('is-hidden', document.hidden);
    loops.forEach((loop) => {
      if (document.hidden) loop.classList.remove('is-visible');
      else {
        loopObserver.unobserve(loop);
        loopObserver.observe(loop);
      }
    });
  });

  if (prefersReducedMotion()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        element.classList.add('is-in');
        element.querySelectorAll<HTMLElement>('[data-count]').forEach(runCounter);
        if (element.hasAttribute('data-reveal')) {
          element.addEventListener('transitionend', (event) => {
            if (event.target === element && event.propertyName === 'clip-path')
              element.classList.add('is-done');
          });
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  document.querySelectorAll('[data-reveal], [data-split]').forEach((element) => observer.observe(element));
};
