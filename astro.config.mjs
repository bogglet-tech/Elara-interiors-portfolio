// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before launch (also used for canonical URLs, OG tags and sitemap).
export default defineConfig({
  site: 'https://www.elarainteriors.in',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
