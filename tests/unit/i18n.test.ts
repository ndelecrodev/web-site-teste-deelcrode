import { describe, expect, it } from 'vitest';
import {
  formatCount,
  getDictionary,
  isLocale,
  locales,
  localizePath,
  otherLocale,
  sectionId,
  sectionKeys,
  stripLocale,
} from '@/i18n';

/** Achata o dicionário em caminhos como `hero.terminal.steps.3`, para comparar a forma entre idiomas. */
const shape = (value: unknown, prefix = ''): string[] => {
  if (typeof value !== 'object' || value === null) return [prefix];
  return Object.entries(value).flatMap(([key, child]) => shape(child, prefix ? `${prefix}.${key}` : key));
};

const leaves = (value: unknown): string[] => {
  if (typeof value === 'string') return [value];
  if (typeof value !== 'object' || value === null) return [];
  return Object.values(value).flatMap(leaves);
};

describe('dicionários', () => {
  const pt = getDictionary('pt');
  const en = getDictionary('en');

  it('têm exatamente as mesmas chaves e os mesmos tamanhos de lista', () => {
    expect(shape(en).sort()).toEqual(shape(pt).sort());
  });

  it('não deixam texto visível em branco', () => {
    const optional = /\.(text|diagramAlt|shotAlt|shotCaption)$/;
    for (const dict of [pt, en]) {
      const empty = shape(dict).filter((path) => {
        const value = path
          .split('.')
          .reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], dict);
        return value === '' && !optional.test(path);
      });
      expect(empty).toEqual([]);
    }
  });

  it('mantêm a headline do hero em até 12 palavras', () => {
    for (const dict of [pt, en]) expect(dict.hero.headline.split(/\s+/).length).toBeLessThanOrEqual(12);
  });

  it('listam as 7 etapas do Task Time Sync no terminal', () => {
    expect(pt.hero.terminal.steps).toHaveLength(7);
    expect(en.hero.terminal.steps).toHaveLength(7);
  });

  it('não usam os clichês vetados na copy', () => {
    const banned = /apaixonad|proativ|dinâmic|sinergia|passionate|proactive|synergy/i;
    for (const dict of [pt, en]) expect(leaves(dict).filter((text) => banned.test(text))).toEqual([]);
  });
});

describe('rotas por idioma', () => {
  it('reconhece apenas os idiomas suportados', () => {
    expect(locales.every(isLocale)).toBe(true);
    expect(isLocale('es')).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it('prefixa só o inglês', () => {
    expect(localizePath('/', 'pt')).toBe('/');
    expect(localizePath('/', 'en')).toBe('/en/');
    expect(localizePath('/cases/task-time-sync/', 'en')).toBe('/en/cases/task-time-sync/');
    expect(localizePath('/en/cases/task-time-sync/', 'pt')).toBe('/cases/task-time-sync/');
  });

  it('normaliza barras ao remover o prefixo', () => {
    expect(stripLocale('/en')).toBe('/');
    expect(stripLocale('/en/')).toBe('/');
    expect(stripLocale('cases/quimia-admin')).toBe('/cases/quimia-admin/');
    expect(stripLocale('/english/')).toBe('/english/');
  });

  it('alterna entre os dois idiomas', () => {
    expect(otherLocale('pt')).toBe('en');
    expect(otherLocale('en')).toBe('pt');
  });

  it('dá uma âncora única por seção em cada idioma', () => {
    for (const locale of locales) {
      const ids = sectionKeys.map((key) => sectionId(locale, key));
      expect(new Set(ids).size).toBe(sectionKeys.length);
      ids.forEach((id) => expect(id).toMatch(/^[a-z]+$/));
    }
  });
});

describe('contagem de projetos', () => {
  it('flexiona singular e plural', () => {
    expect(formatCount(getDictionary('pt'), 1)).toBe('1 projeto');
    expect(formatCount(getDictionary('pt'), 5)).toBe('5 projetos');
    expect(formatCount(getDictionary('en'), 1)).toBe('1 project');
    expect(formatCount(getDictionary('en'), 2)).toBe('2 projects');
  });
});
