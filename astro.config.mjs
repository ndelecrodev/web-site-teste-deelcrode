import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cspHeaders from './integrations/csp-headers.mjs';

export default defineConfig({
  site: 'https://nicolasdelecrode.dev',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [cspHeaders()],
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
