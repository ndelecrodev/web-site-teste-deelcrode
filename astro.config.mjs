import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cspHeaders from './integrations/csp-headers.mjs';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://nicolasdelecrode.dev',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [cspHeaders()],
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
