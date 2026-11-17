import {
  siBackblaze,
  siBetterstack,
  siChartdotjs,
  siCloudflarepages,
  siCodecov,
  siCss,
  siDjango,
  siFastapi,
  siGithub,
  siGithubactions,
  siGithubpages,
  siHtml5,
  siJavascript,
  siJunit5,
  siOpenjdk,
  siPoetry,
  siPostgresql,
  siPydantic,
  siPytest,
  siPython,
  siSentry,
  siSpringboot,
  siSpringsecurity,
  siSqlalchemy,
  siSupabase,
  siUv,
} from 'simple-icons';

export interface Tech {
  name: string;
  icon?: { path: string; hex: string };
}

const icon = ({ path, hex }: { path: string; hex: string }) => ({ path, hex });

export const tech = {
  python: { name: 'Python', icon: icon(siPython) },
  java: { name: 'Java', icon: icon(siOpenjdk) },
  sql: { name: 'SQL' },
  javascript: { name: 'JavaScript', icon: icon(siJavascript) },
  html: { name: 'HTML', icon: icon(siHtml5) },
  css: { name: 'CSS', icon: icon(siCss) },
  fastapi: { name: 'FastAPI', icon: icon(siFastapi) },
  django: { name: 'Django', icon: icon(siDjango) },
  springboot: { name: 'Spring Boot', icon: icon(siSpringboot) },
  springsecurity: { name: 'Spring Security', icon: icon(siSpringsecurity) },
  pydantic: { name: 'Pydantic', icon: icon(siPydantic) },
  sqlalchemy: { name: 'SQLAlchemy', icon: icon(siSqlalchemy) },
  requests: { name: 'Requests' },
  rest: { name: 'REST APIs' },
  webhooks: { name: 'Webhooks' },
  postgresql: { name: 'PostgreSQL', icon: icon(siPostgresql) },
  supabase: { name: 'Supabase', icon: icon(siSupabase) },
  backblaze: { name: 'Backblaze B2', icon: icon(siBackblaze) },
  etl: { name: 'ETL' },
  powerautomate: { name: 'Power Automate' },
  excel: { name: 'Excel' },
  github: { name: 'Git & GitHub', icon: icon(siGithub) },
  githubactions: { name: 'GitHub Actions', icon: icon(siGithubactions) },
  githubpages: { name: 'GitHub Pages', icon: icon(siGithubpages) },
  pytest: { name: 'pytest', icon: icon(siPytest) },
  junit: { name: 'JUnit', icon: icon(siJunit5) },
  junit5: { name: 'JUnit 5', icon: icon(siJunit5) },
  black: { name: 'black' },
  pylint: { name: 'pylint' },
  poetry: { name: 'Poetry', icon: icon(siPoetry) },
  uv: { name: 'uv', icon: icon(siUv) },
  codecov: { name: 'Codecov', icon: icon(siCodecov) },
  cloudflarepages: { name: 'Cloudflare Pages', icon: icon(siCloudflarepages) },
  sentry: { name: 'Sentry', icon: icon(siSentry) },
  betterstack: { name: 'Better Stack', icon: icon(siBetterstack) },
  chartjs: { name: 'Chart.js', icon: icon(siChartdotjs) },
  mkdocs: { name: 'MkDocs' },
} satisfies Record<string, Tech>;

export type TechId = keyof typeof tech;

export const getTech = (id: TechId): Tech => tech[id];

/** Marcas muito escuras somem no tema escuro; nesses casos o hover usa a cor de texto forte. */
export const brandColor = (hex: string): string | undefined => {
  const [r, g, b] = [0, 2, 4].map((start) => parseInt(hex.slice(start, start + 2), 16) / 255) as [
    number,
    number,
    number,
  ];
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.2 ? undefined : `#${hex}`;
};
