import { ease, limits, loadGsap } from '@/lib/motion';

/** Efeitos ligados ao scroll (GSAP + ScrollTrigger): parallax, linha da timeline e inclinação do ticker de contato. */
export const initScrollEffects = async (): Promise<void> => {
  const { gsap, ScrollTrigger } = await loadGsap();

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
    const amount = Math.min(Number(element.dataset['parallax']) || 8, limits.parallaxPercent);
    gsap.fromTo(
      element,
      { yPercent: 0 },
      {
        yPercent: -amount,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      },
    );
  });

  const timeline = document.querySelector<HTMLElement>('[data-timeline]');
  const line = timeline?.querySelector<SVGLineElement>('[data-timeline-line]');
  if (timeline && line) {
    const entries = [...timeline.querySelectorAll<HTMLElement>('[data-timeline-entry]')];
    entries.forEach((entry) => entry.classList.remove('is-lit'));
    gsap.fromTo(
      line,
      { '--offset': 1 },
      {
        '--offset': 0,
        ease: 'none',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 72%',
          end: 'bottom 62%',
          scrub: 0.5,
          onUpdate: (self) => {
            const reached = self.progress * timeline.offsetHeight;
            entries.forEach((entry) => entry.classList.toggle('is-lit', reached >= entry.offsetTop));
          },
        },
      },
    );
  }

  const ticker = document.querySelector<HTMLElement>('[data-skew]');
  if (ticker) {
    const skewTo = gsap.quickTo(ticker, 'skewX', { duration: 0.6, ease: ease.out });
    ScrollTrigger.create({
      trigger: ticker,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => skewTo(gsap.utils.clamp(-5, 5, self.getVelocity() / -400)),
    });
    ScrollTrigger.addEventListener('scrollEnd', () => skewTo(0));
  }
};
