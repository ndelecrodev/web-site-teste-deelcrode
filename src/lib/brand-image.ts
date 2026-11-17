import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { site } from '@/data/site';
import { getDictionary, type Locale } from '@/i18n';
import { siteUrl } from '@/lib/url';

/* Equivalentes em hex dos tokens OKLCH (satori e ícones PNG não entendem oklch). */
const COLOR = {
  bg: '#0d0e11',
  line: '#26282d',
  muted: '#9a9da6',
  fg: '#f4f4f6',
  accent: '#fb6c2b',
};

const fontFile = (pkg: string, file: string): Promise<Buffer> =>
  readFile(join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

type Node = { type: string; props: { style: Record<string, string | number>; children?: Node[] | string } };

const el = (style: Record<string, string | number>, children?: Node[] | string): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, ...(children === undefined ? {} : { children }) },
});

const markSvg = (size: number, tile: boolean): string => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  ${tile ? `<rect width="64" height="64" rx="14" fill="${COLOR.bg}"/>` : ''}
  <g fill="none" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 44V20l15 24V20" stroke="${COLOR.fg}"/>
    <path d="M35 20h15L35 44h15" stroke="${COLOR.accent}"/>
  </g>
</svg>`;

export const renderIcon = (size: number): Promise<Buffer> =>
  sharp(Buffer.from(markSvg(512, true)))
    .resize(size, size)
    .png()
    .toBuffer();

export const renderOgImage = async (lang: Locale): Promise<Buffer> => {
  const { meta } = getDictionary(lang);
  const [bold, light, mono] = await Promise.all([
    fontFile('bricolage-grotesque', 'bricolage-grotesque-latin-700-normal.woff'),
    fontFile('bricolage-grotesque', 'bricolage-grotesque-latin-300-normal.woff'),
    fontFile('jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff'),
  ]);
  const [first, middle, last] = site.name.split(' ');
  const monoText = { fontFamily: 'Mono', fontSize: 22, letterSpacing: 1.5, color: COLOR.muted };

  const tree = el(
    {
      width: 1200,
      height: 630,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 64,
      backgroundColor: COLOR.bg,
      backgroundImage: `linear-gradient(to right, ${COLOR.line} 1px, transparent 1px)`,
      backgroundSize: '268px 100%',
      backgroundPosition: '64px 0',
      color: COLOR.fg,
      fontFamily: 'Display',
    },
    [
      el({ justifyContent: 'space-between', alignItems: 'center' }, [
        el({ ...monoText, color: COLOR.fg }, new URL(siteUrl).host),
        el(monoText, `${site.coordinates.lat} · ${site.coordinates.lon}`),
      ]),
      el({ flexDirection: 'column', fontSize: 132, lineHeight: 0.9, letterSpacing: -6 }, [
        el({ fontWeight: 700 }, first ?? ''),
        el({ fontWeight: 300, color: COLOR.muted }, middle ?? ''),
        el({ fontWeight: 700 }, last ?? ''),
      ]),
      el({ justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el({ flexDirection: 'column' }, [
          el({ width: 72, height: 4, backgroundColor: COLOR.accent, marginBottom: 20 }),
          el({ fontSize: 34, fontWeight: 700, letterSpacing: -1 }, meta.ogTagline),
        ]),
        el({ ...monoText, textTransform: 'uppercase' }, meta.ogRole),
      ]),
    ],
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Display', data: bold, weight: 700, style: 'normal' },
      { name: 'Display', data: light, weight: 300, style: 'normal' },
      { name: 'Mono', data: mono, weight: 400, style: 'normal' },
    ],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
};
