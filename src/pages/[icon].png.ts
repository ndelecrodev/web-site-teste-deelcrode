import type { APIRoute } from 'astro';
import { renderIcon } from '@/lib/brand-image';

const ICONS: Record<string, number> = {
  'favicon-32': 32,
  'apple-touch-icon': 180,
  'icon-192': 192,
  'icon-512': 512,
};

export const getStaticPaths = () => Object.keys(ICONS).map((icon) => ({ params: { icon } }));

export const GET: APIRoute = async ({ params }) => {
  const image = await renderIcon(ICONS[params['icon'] ?? ''] ?? 32);
  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/png' } });
};
