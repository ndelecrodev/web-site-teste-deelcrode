import { describe, expect, it } from 'vitest';
import { cases } from '@/data/cases';
import { categories, projects } from '@/data/projects';
import { proofs } from '@/data/proofs';
import { LINKEDIN_URL } from '@/data/site';
import { filterIds, isFilterId, matchesFilter, parseCategories, type FilterId } from '@/lib/filter';
import { renderInline, splitWords } from '@/lib/inline';

/** Mesma conta que o cliente faz em cada card: categorias do projeto contra o filtro ativo. */
const visibleIds = (filter: FilterId): string[] =>
  projects.filter((project) => matchesFilter(project.categories, filter)).map((project) => project.id);

describe('filtro de projetos', () => {
  it('"all" mostra os cinco projetos, na ordem original', () => {
    expect(visibleIds('all')).toEqual(['tts', 'quimia-admin', 'quimia-dashboard', 'quimia-site', 'tts-docs']);
  });

  it('filtra por categoria', () => {
    expect(visibleIds('python')).toEqual(['tts', 'tts-docs']);
    expect(visibleIds('java')).toEqual(['quimia-admin']);
    expect(visibleIds('frontend')).toEqual(['quimia-dashboard', 'quimia-site']);
    expect(visibleIds('integrations')).toEqual(['tts', 'quimia-dashboard']);
  });

  it('nenhum filtro fica vazio', () => {
    for (const category of categories) expect(visibleIds(category).length).toBeGreaterThan(0);
  });

  it('valida o identificador do filtro', () => {
    expect(filterIds).toEqual(['all', 'python', 'java', 'frontend', 'integrations']);
    expect(isFilterId('java')).toBe(true);
    expect(isFilterId('rust')).toBe(false);
    expect(isFilterId(undefined)).toBe(false);
  });

  it('casa categorias lidas do atributo data-cats', () => {
    expect(parseCategories(' python   integrations ')).toEqual(['python', 'integrations']);
    expect(parseCategories(undefined)).toEqual([]);
    expect(matchesFilter(['python', 'integrations'], 'integrations')).toBe(true);
    expect(matchesFilter(['python'], 'java')).toBe(false);
    expect(matchesFilter([], 'all')).toBe(true);
  });
});

describe('dados', () => {
  it('destaca Task Time Sync e o painel do Quimia', () => {
    expect(projects.filter((project) => project.featured).map((project) => project.id)).toEqual([
      'tts',
      'quimia-admin',
    ]);
  });

  it('todo estudo de caso linkado existe, e vice-versa', () => {
    const linked = projects.flatMap((project) => (project.caseSlug ? [project.caseSlug] : []));
    expect(linked.sort()).toEqual(cases.map((study) => study.slug).sort());
  });

  it('só usa links externos em https', () => {
    const links = [
      ...projects.flatMap((project) => [project.repo, project.demo]),
      ...cases.flatMap((study) => study.links.map((link) => link.href)),
      LINKEDIN_URL,
    ].filter((href): href is string => Boolean(href));
    links.forEach((href) => expect(href).toMatch(/^https:\/\/[^\s]+$/));
    expect(links.some((href) => href.includes('seu-usuario'))).toBe(false);
  });

  it('mantém os números da faixa de provas iguais à fonte', () => {
    expect(Object.fromEntries(proofs.map((proof) => [proof.id, proof.value]))).toEqual({
      tests: 160,
      steps: 7,
      channels: 8,
      screens: 11,
      lockout: 5,
    });
  });
});

describe('texto inline', () => {
  it('escapa HTML e converte crases em <code>', () => {
    expect(renderInline('Com `ddl-auto=validate` e <b>')).toBe(
      'Com <code>ddl-auto=validate</code> e &lt;b&gt;',
    );
  });

  it('divide em palavras ignorando espaços extras', () => {
    expect(splitWords('  Vamos   conversar ')).toEqual(['Vamos', 'conversar']);
  });
});
