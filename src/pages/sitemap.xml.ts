import type { APIRoute } from 'astro';
import { cases } from '@/data/cases';
import { htmlLang, locales, localizePath } from '@/i18n';
import { absoluteUrl } from '@/lib/url';

const paths = ['/', ...cases.map((study) => `/cases/${study.slug}/`)];

export const GET: APIRoute = () => {
  const urls = paths.flatMap((path) =>
    locales.map((locale) => {
      const alternates = locales
        .map(
          (alt) =>
            `<xhtml:link rel="alternate" hreflang="${htmlLang[alt]}" href="${absoluteUrl(localizePath(path, alt))}"/>`,
        )
        .join('');
      return `<url><loc>${absoluteUrl(localizePath(path, locale))}</loc>${alternates}</url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
