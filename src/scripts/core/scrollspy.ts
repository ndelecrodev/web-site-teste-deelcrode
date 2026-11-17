/** Marca o link da seção visível e desliza o indicador do menu até ele. */
export const initScrollSpy = (): void => {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const indicator = nav?.querySelector<HTMLElement>('[data-nav-indicator]');
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  if (!nav || !indicator || sections.length === 0) return;

  const links = new Map(
    [...nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')].map((link) => [
      link.dataset['navLink'],
      link,
    ]),
  );
  let active: HTMLAnchorElement | undefined;

  const desktop = matchMedia('(min-width: 64rem)');

  const moveIndicator = (): void => {
    if (!desktop.matches) return;
    if (!active) {
      indicator.style.setProperty('--w', '0');
      return;
    }
    const inset = 10;
    indicator.style.setProperty('--x', `${active.offsetLeft + inset}px`);
    indicator.style.setProperty('--w', String(active.offsetWidth - inset * 2));
  };

  const setActive = (key: string | undefined): void => {
    const next = links.get(key);
    if (next === active) return;
    active?.removeAttribute('aria-current');
    next?.setAttribute('aria-current', 'true');
    active = next;
    moveIndicator();
  };

  const visible = new Set<HTMLElement>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) visible.add(section);
        else visible.delete(section);
      });
      const current = sections.filter((section) => visible.has(section)).at(-1);
      setActive(current?.dataset['section']);
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((section) => observer.observe(section));

  addEventListener('resize', moveIndicator, { passive: true });
  void document.fonts.ready.then(moveIndicator);
};
