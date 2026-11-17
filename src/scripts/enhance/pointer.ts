import { duration, ease, limits, loadGsap } from '@/lib/motion';

const INTERACTIVE = 'a, button, [data-card]';

/** Efeitos que dependem de mouse: cursor de apoio, botões magnéticos, tilt 3D e spotlight dos cards. */
export const initPointerEffects = async (): Promise<void> => {
  const { gsap } = await loadGsap();

  const cursor = document.querySelector<HTMLElement>('.cursor');
  if (cursor) {
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: ease.out });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: ease.out });
    addEventListener(
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse') return;
        xTo(event.clientX);
        yTo(event.clientY);
        cursor.classList.add('is-on');
      },
      { passive: true },
    );
    document.addEventListener('pointerover', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle('is-active', Boolean(target?.closest(INTERACTIVE)));
    });
    document.documentElement.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));
  }

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((element) => {
    const xTo = gsap.quickTo(element, 'x', { duration: duration.base, ease: ease.out });
    const yTo = gsap.quickTo(element, 'y', { duration: duration.base, ease: ease.out });
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      xTo((event.clientX - (rect.left + rect.width / 2)) * limits.magneticStrength);
      yTo((event.clientY - (rect.top + rect.height / 2)) * limits.magneticStrength);
    });
    element.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((surface) => {
    let frame = 0;
    surface.addEventListener('pointermove', (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = surface.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        surface.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
        surface.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        surface.style.setProperty('--rx', `${((0.5 - py) * 2 * limits.tiltDegrees).toFixed(2)}deg`);
        surface.style.setProperty('--ry', `${((px - 0.5) * 2 * limits.tiltDegrees).toFixed(2)}deg`);
      });
    });
    surface.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      surface.style.setProperty('--rx', '0deg');
      surface.style.setProperty('--ry', '0deg');
    });
  });
};
