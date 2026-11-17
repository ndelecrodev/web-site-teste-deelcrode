import type { ImageMetadata } from 'astro';
import type { CaseSlug, ProjectId } from './projects';
import adminShot from '@/assets/cases/quimia-admin-dashboard.png';
import dashboardShot from '@/assets/cases/quimia-dashboard-tela.png';
import adminDiagramPt from '@/assets/cases/quimia-admin-arquitetura.svg';
import adminDiagramEn from '@/assets/cases/quimia-admin-arquitetura.en.svg';
import dashboardDiagramPt from '@/assets/cases/quimia-dashboard-arquitetura.svg';
import dashboardDiagramEn from '@/assets/cases/quimia-dashboard-arquitetura.en.svg';

export type CaseLinkKind = 'repo' | 'docs' | 'site';

export interface CaseStudy {
  slug: CaseSlug;
  projectId: ProjectId;
  stack: readonly string[];
  links: readonly { kind: CaseLinkKind; href: string }[];
  diagram?: { pt: ImageMetadata; en: ImageMetadata };
  shot?: ImageMetadata;
}

export const cases: readonly CaseStudy[] = [
  {
    slug: 'task-time-sync',
    projectId: 'tts',
    stack: [
      'Python 3.11',
      'Pydantic',
      'SQLAlchemy',
      'Postgres (Supabase)',
      'Poetry',
      'GitHub Actions',
      'Backblaze B2',
      'Sentry',
      'Better Stack',
    ],
    links: [
      { kind: 'repo', href: 'https://github.com/ndelecrodev/task-time-sync' },
      { kind: 'docs', href: 'https://github.com/ndelecrodev/task-time-sync-docs' },
    ],
  },
  {
    slug: 'quimia-admin',
    projectId: 'quimia-admin',
    stack: [
      'Java 25',
      'Spring Boot 4.1',
      'Spring Security',
      'Thymeleaf',
      'Spring Data JPA',
      'PostgreSQL',
      'JUnit 5',
      'GitHub Actions',
    ],
    links: [
      { kind: 'repo', href: 'https://github.com/Quimia-br/quimia-web-crud' },
      { kind: 'site', href: 'https://quimia.tech' },
    ],
    diagram: { pt: adminDiagramPt, en: adminDiagramEn },
    shot: adminShot,
  },
  {
    slug: 'quimia-dashboard',
    projectId: 'quimia-dashboard',
    stack: [
      'JavaScript (vanilla)',
      'Chart.js',
      'Supabase (Auth + PostgREST)',
      'PostgreSQL RLS',
      'Cloudflare Pages Functions',
      'Backblaze B2',
      'SheetJS',
    ],
    links: [{ kind: 'repo', href: 'https://github.com/ndelecrodev/quimia-dashboard' }],
    diagram: { pt: dashboardDiagramPt, en: dashboardDiagramEn },
    shot: dashboardShot,
  },
];
