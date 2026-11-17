import Lenis from 'lenis';
import { loadGsap } from '@/lib/motion';

/** Smooth scroll (Lenis) sincronizado com o ticker do GSAP. Só é carregado com mouse e sem reduced motion. */
export const initSmoothScroll = async (): Promise<void> => {
  const { gsap, ScrollTrigger } = await loadGsap();
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    anchors: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
};
