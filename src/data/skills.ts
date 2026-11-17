import type { TechId } from './tech';

export type SkillGroupId = 'languages' | 'backend' | 'data' | 'quality' | 'observability' | 'soft';
export type SoftSkillId = 'communication' | 'autonomy' | 'feedback' | 'detail';

export interface SkillGroup {
  id: SkillGroupId;
  tech: readonly TechId[];
  soft: readonly SoftSkillId[];
}

export const skillGroups: readonly SkillGroup[] = [
  { id: 'languages', tech: ['python', 'java', 'sql', 'javascript', 'html', 'css'], soft: [] },
  {
    id: 'backend',
    tech: ['fastapi', 'django', 'springboot', 'springsecurity', 'pydantic', 'sqlalchemy', 'requests'],
    soft: [],
  },
  {
    id: 'data',
    tech: ['rest', 'webhooks', 'postgresql', 'supabase', 'backblaze', 'etl', 'powerautomate', 'excel'],
    soft: [],
  },
  {
    id: 'quality',
    tech: [
      'github',
      'githubactions',
      'pytest',
      'junit5',
      'black',
      'pylint',
      'poetry',
      'uv',
      'codecov',
      'cloudflarepages',
    ],
    soft: [],
  },
  { id: 'observability', tech: ['sentry', 'betterstack'], soft: [] },
  { id: 'soft', tech: [], soft: ['communication', 'autonomy', 'feedback', 'detail'] },
];

export const marqueeTech: readonly TechId[] = [
  'python',
  'fastapi',
  'django',
  'java',
  'springboot',
  'postgresql',
  'sqlalchemy',
  'pydantic',
  'pytest',
  'junit5',
  'githubactions',
  'codecov',
  'sentry',
  'betterstack',
  'supabase',
];
