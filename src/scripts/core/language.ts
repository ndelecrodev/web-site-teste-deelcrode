import { isLocale, sectionId, sectionKeys, type SectionKey } from '@/i18n';

const isSectionKey = (value: string | undefined): value is SectionKey =>
  (sectionKeys as readonly string[]).includes(value ?? '');

/** Seção que ocupa o meio da tela, para a troca de idioma cair no mesmo ponto da página. */
const activeSection = (): SectionKey | undefined => {
  const middle = innerHeight / 2;
  for (const section of document.querySelectorAll<HTMLElement>('[data-section]')) {
    const { top, bottom } = section.getBoundingClientRect();
    const key = section.dataset['section'];
    if (top <= middle && bottom >= middle && isSectionKey(key)) return key;
  }
  return undefined;
};

/** Persiste o idioma escolhido e mantém a seção atual ao trocar. */
export const initLanguage = (): void => {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang]').forEach((link) => {
    link.addEventListener('click', () => {
      const locale = link.dataset['lang'];
      if (!isLocale(locale)) return;
      try {
        localStorage.setItem('lang', locale);
      } catch {
        /* sem armazenamento, a escolha vale só para esta navegação */
      }
      const key = activeSection();
      const url = new URL(link.href);
      url.hash = key ? sectionId(locale, key) : '';
      link.href = url.href;
    });
  });
};
