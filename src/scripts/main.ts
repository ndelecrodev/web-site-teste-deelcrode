import { initCopyEmail } from './core/email';
import { initFilter } from './core/filter';
import { initHeader } from './core/header';
import { initLanguage } from './core/language';
import { initAnchorFlush, releaseLayout } from './core/layout';
import { initMenu } from './core/menu';
import { initReveal } from './core/reveal';
import { initScrollSpy } from './core/scrollspy';
import { initTheme } from './core/theme';
import { allowsPointerEffects, hasFinePointer, onIdle, prefersReducedMotion } from '@/lib/motion';

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

initTheme();
initLanguage();
initHeader();
initMenu();
initScrollSpy();
initReveal();
initFilter();
initCopyEmail();
initAnchorFlush();
window.__motionReady = true;

const onFirst = (events: readonly (keyof WindowEventMap)[], callback: () => void): void => {
  const run = (): void => {
    events.forEach((event) => removeEventListener(event, run));
    callback();
  };
  events.forEach((event) => addEventListener(event, run, { passive: true }));
};

const motion = !prefersReducedMotion();

/*
 * O carregamento inicial fica só com o essencial. O resto entra quando faz falta:
 * - primeiro gesto (rolagem, toque, tecla): libera o layout das seções e, em seguida, carrega
 *   GSAP + ScrollTrigger (parallax, timeline) e o Lenis (smooth scroll, só com mouse);
 * - primeiro movimento do mouse: cursor, tilt e botões magnéticos.
 */
onFirst(['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown'], () => {
  releaseLayout(() => {
    if (!motion) return;
    void import('./enhance/scroll').then((module) => module.initScrollEffects());
    if (hasFinePointer()) void import('./enhance/smooth').then((module) => module.initSmoothScroll());
  });
});

if (motion) {
  const startTerminal = (): void => {
    if (!document.querySelector('[data-terminal]')) return;
    void import('./enhance/terminal').then((module) => module.initTerminal());
  };
  if (document.readyState === 'complete') onIdle(startTerminal);
  else addEventListener('load', () => onIdle(startTerminal), { once: true });

  if (allowsPointerEffects()) {
    onFirst(['pointermove'], () => {
      void import('./enhance/pointer').then((module) => module.initPointerEffects());
    });
  }
}
