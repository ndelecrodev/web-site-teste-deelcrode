/**
 * Tokens e utilitários de motion. Os mesmos valores existem em CSS (`--dur-*`, `--ease-*` em global.css).
 * Regra: animar só `transform` e `opacity` (e `clip-path` com parcimônia); nada de easing linear em UI.
 */
export const duration = {
  micro: 0.15,
  base: 0.4,
  section: 0.85,
} as const;

export const ease = {
  out: 'power3.out',
  expo: 'expo.out',
  inOut: 'power2.inOut',
  cssOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  cssExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const limits = {
  parallaxPercent: 10,
  tiltDegrees: 4,
  magneticStrength: 0.28,
} as const;

interface NavigatorHints {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
}

export const prefersReducedMotion = (): boolean => matchMedia('(prefers-reduced-motion: reduce)').matches;

export const hasFinePointer = (): boolean => matchMedia('(hover: hover) and (pointer: fine)').matches;

export const isLowPower = (): boolean => {
  const hints = navigator as Navigator & NavigatorHints;
  return (
    (navigator.hardwareConcurrency ?? 8) <= 2 ||
    (hints.deviceMemory ?? 8) <= 2 ||
    hints.connection?.saveData === true
  );
};

/** Efeitos de ponteiro (cursor, tilt, magnético) só fazem sentido com mouse e máquina folgada. */
export const allowsPointerEffects = (): boolean =>
  !prefersReducedMotion() && hasFinePointer() && !isLowPower();

type GsapBundle = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
};

let gsapBundle: Promise<GsapBundle> | undefined;

export const loadGsap = (): Promise<GsapBundle> => {
  gsapBundle ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: ease.out, duration: duration.base });
      return { gsap, ScrollTrigger };
    },
  );
  return gsapBundle;
};

/** Chama `callback` sempre que o elemento entra ou sai da viewport. Devolve a função de limpeza. */
export const watchVisibility = (
  element: Element,
  callback: (visible: boolean) => void,
  rootMargin = '0px',
): (() => void) => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => callback(entry.isIntersecting)),
    { rootMargin },
  );
  observer.observe(element);
  return () => observer.disconnect();
};

export const onIdle = (callback: () => void): void => {
  if ('requestIdleCallback' in window) requestIdleCallback(callback, { timeout: 2000 });
  else setTimeout(callback, 300);
};
