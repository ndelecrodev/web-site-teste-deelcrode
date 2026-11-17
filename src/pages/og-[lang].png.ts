import type { APIRoute } from 'astro';
import { isLocale, locales } from '@/i18n';
import { renderOgImage } from '@/lib/brand-image';

export const getStaticPaths = () => locales.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = async ({ params }) => {
  const lang = isLocale(params['lang']) ? params['lang'] : 'pt';
  const image = await renderOgImage(lang);
  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/png' } });
};
