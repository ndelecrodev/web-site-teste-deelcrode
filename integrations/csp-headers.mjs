import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const INLINE_SCRIPT =
  /<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g;
const TOKEN = '{{SCRIPT_HASHES}}';

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    }),
  );
  return nested.flat();
}

/** Troca o marcador de `public/_headers` pelos hashes SHA-256 dos scripts inline gerados no build. */
export default function cspHeaders() {
  return {
    name: 'csp-headers',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const hashes = new Set();
        for (const file of await htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          for (const [, body] of html.matchAll(INLINE_SCRIPT)) {
            if (body.trim()) hashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
          }
        }
        const headersPath = join(root, '_headers');
        const headers = await readFile(headersPath, 'utf8');
        await writeFile(headersPath, headers.replace(TOKEN, [...hashes].join(' ')));
        logger.info(`CSP: ${hashes.size} hash(es) de script inline gravados em _headers`);
      },
    },
  };
}
