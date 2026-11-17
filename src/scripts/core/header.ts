/** Fundo do cabeçalho após o primeiro scroll e barra de progresso de leitura, num único rAF. */
export const initHeader = (): void => {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const progress = document.querySelector<HTMLElement>('.progress');
  let ticking = false;

  const update = (): void => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    header?.classList.toggle('is-scrolled', scrollY > 12);
    progress?.style.setProperty('--progress', max > 0 ? (scrollY / max).toFixed(4) : '0');
  };

  const request = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request, { passive: true });
  request();
};
