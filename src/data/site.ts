export const SITE_URL = 'https://nicolasdelecrode.dev';

/**
 * URL completa do perfil no LinkedIn. Enquanto estiver vazia, nenhum botão de LinkedIn é renderizado.
 * Pendência registrada no README, seção "Pendências".
 */
export const LINKEDIN_URL: string = '';

/*
 * Analytics: desligado. Se um dia for necessário, usar uma opção sem cookies (Cloudflare Web Analytics),
 * adicionar o beacon em `src/layouts/Base.astro` e liberar o domínio na CSP de `public/_headers`.
 */

export const site = {
  name: 'Nicolas Delecrode Zampieri',
  shortName: 'Nicolas Zampieri',
  initials: 'NZ',
  city: 'São Paulo',
  region: 'SP',
  country: 'BR',
  coordinates: { lat: '23.5505° S', lon: '46.6333° W' },
  github: 'https://github.com/ndelecrodev',
  githubHandle: 'ndelecrodev',
  /** O endereço fica em partes para não aparecer inteiro no HTML e é montado no cliente. */
  email: { user: 'nicolas17delecrodepf', domain: 'gmail', tld: 'com' },
  cv: { pt: '/assets/cv.pdf', en: '/assets/cv-en.pdf' },
  year: 2026,
} as const;
