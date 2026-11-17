import type { TechId } from './tech';

export const categories = ['python', 'java', 'frontend', 'integrations'] as const;
export type Category = (typeof categories)[number];

export type ProjectId = 'tts' | 'quimia-admin' | 'quimia-dashboard' | 'quimia-site' | 'tts-docs';
export type CaseSlug = 'task-time-sync' | 'quimia-admin' | 'quimia-dashboard';

export interface Project {
  id: ProjectId;
  categories: readonly Category[];
  tech: readonly TechId[];
  featured: boolean;
  team: boolean;
  caseSlug?: CaseSlug;
  repo: string;
  demo?: string;
}

/** Links conferidos no site publicado (nicolasdelecrode.dev) e no repositório que o gera. */
export const projects: readonly Project[] = [
  {
    id: 'tts',
    categories: ['python', 'integrations'],
    tech: ['python', 'postgresql', 'sqlalchemy', 'pytest', 'githubactions'],
    featured: true,
    team: false,
    caseSlug: 'task-time-sync',
    repo: 'https://github.com/ndelecrodev/task-time-sync',
  },
  {
    id: 'quimia-admin',
    categories: ['java'],
    tech: ['java', 'springboot', 'postgresql', 'junit'],
    featured: true,
    team: true,
    caseSlug: 'quimia-admin',
    repo: 'https://github.com/Quimia-br/quimia-web-crud',
  },
  {
    id: 'quimia-dashboard',
    categories: ['frontend', 'integrations'],
    tech: ['javascript', 'html', 'css', 'chartjs', 'cloudflarepages'],
    featured: false,
    team: true,
    caseSlug: 'quimia-dashboard',
    repo: 'https://github.com/ndelecrodev/quimia-dashboard',
  },
  {
    id: 'quimia-site',
    categories: ['frontend'],
    tech: ['html', 'css', 'javascript', 'githubpages'],
    featured: false,
    team: true,
    repo: 'https://github.com/Quimia-br/quimia-landingpage',
    demo: 'https://quimia.tech',
  },
  {
    id: 'tts-docs',
    categories: ['python'],
    tech: ['python', 'mkdocs'],
    featured: false,
    team: false,
    repo: 'https://github.com/ndelecrodev/task-time-sync-docs',
  },
];
