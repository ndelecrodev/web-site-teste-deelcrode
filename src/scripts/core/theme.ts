import { prefersReducedMotion } from '@/lib/motion';

type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = { dark: '#0d0e11', light: '#f8f5f0' };

const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset['theme'] = theme;
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => (meta.content = THEME_COLORS[theme]));
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* armazenamento indisponível: o tema vale só para esta página */
  }
};

const currentTheme = (): Theme => (document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark');

/** Troca de tema com revelação circular a partir do botão (View Transitions), sem flash. */
export const initTheme = (): void => {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  button.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    if (!document.startViewTransition || prefersReducedMotion()) {
      applyTheme(next);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add('theme-switching');
    const transition = document.startViewTransition(() => applyTheme(next));
    void transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 650,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
    void transition.finished.finally(() => root.classList.remove('theme-switching'));
  });
};
