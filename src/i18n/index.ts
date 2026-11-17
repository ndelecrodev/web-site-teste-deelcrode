import { en } from './en';
import { pt, type Dictionary } from './pt';

export type { Dictionary };

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en' };
export const ogLocale: Record<Locale, string> = { pt: 'pt_BR', en: 'en_US' };

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const isLocale = (value: string | null | undefined): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export const otherLocale = (locale: Locale): Locale => (locale === 'pt' ? 'en' : 'pt');

export const sectionKeys = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const;
export type SectionKey = (typeof sectionKeys)[number];

const sectionIds: Record<Locale, Record<SectionKey, string>> = {
  pt: {
    about: 'sobre',
    skills: 'habilidades',
    experience: 'experiencia',
    projects: 'projetos',
    education: 'formacao',
    contact: 'contato',
  },
  en: {
    about: 'about',
    skills: 'skills',
    experience: 'experience',
    projects: 'projects',
    education: 'education',
    contact: 'contact',
  },
};

export const sectionId = (locale: Locale, key: SectionKey): string => sectionIds[locale][key];

/** Caminho sem prefixo de idioma, sempre com barras no início e no fim: `/`, `/cases/x/`. */
export const stripLocale = (pathname: string): string => {
  const normalized = `/${pathname}/`.replace(/\/{2,}/g, '/');
  const stripped = normalized.replace(/^\/en(?=\/)/, '');
  return stripped === '' ? '/' : stripped;
};

export const localizePath = (path: string, locale: Locale): string => {
  const base = stripLocale(path);
  return locale === defaultLocale ? base : `/en${base}`;
};

export const formatCount = (dict: Dictionary, count: number): string =>
  count === 1 ? dict.projects.countOne : dict.projects.countMany.replace('{n}', String(count));
