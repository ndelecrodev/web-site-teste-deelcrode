import { categories, type Category } from '@/data/projects';

export type FilterId = 'all' | Category;

export const filterIds: readonly FilterId[] = ['all', ...categories];

export const isFilterId = (value: string | null | undefined): value is FilterId =>
  typeof value === 'string' && (filterIds as readonly string[]).includes(value);

export const matchesFilter = (itemCategories: readonly string[], filter: FilterId): boolean =>
  filter === 'all' || itemCategories.includes(filter);

export const parseCategories = (raw: string | undefined): string[] =>
  (raw ?? '').split(/\s+/).filter(Boolean);
