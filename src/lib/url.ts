import { SITE_URL } from '@/data/site';

/*
 * O site pode ser publicado na raiz de um domínio (Cloudflare Pages) ou num subcaminho
 * (GitHub Pages de projeto). `SITE_URL` e `BASE_PATH`, lidos em astro.config.mjs, definem onde;
 * todo link interno e toda URL absoluta passam por aqui.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const siteUrl: string = import.meta.env.SITE ?? SITE_URL;

export const withBase = (path: string): string => `${base}${path}`;

export const absoluteUrl = (path: string): string => new URL(withBase(path), siteUrl).href;
