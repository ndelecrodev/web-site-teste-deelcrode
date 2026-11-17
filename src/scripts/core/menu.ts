/** Menu mobile em tela cheia. A animação é orquestrada em CSS a partir da classe `menu-open`. */
export const initMenu = (): void => {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const root = document.documentElement;
  const background = [document.querySelector('main'), document.querySelector('footer')];

  const setOpen = (open: boolean): void => {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      (open ? toggle.dataset['labelClose'] : toggle.dataset['labelOpen']) ?? '',
    );
    background.forEach((element) => element?.toggleAttribute('inert', open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!root.classList.contains('menu-open')));
  menu
    .querySelectorAll('[data-menu-link]')
    .forEach((link) => link.addEventListener('click', () => setOpen(false)));
  addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !root.classList.contains('menu-open')) return;
    setOpen(false);
    toggle.focus();
  });
  matchMedia('(min-width: 64rem)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
};
