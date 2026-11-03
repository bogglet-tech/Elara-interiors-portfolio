// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before launch. Canonical URLs, Open Graph tags, structured data,
// robots.txt, llms.txt and the sitemap all read it from here.
const SITE = 'https://www.elarainteriors.in';

/** @type {Record<string, number>} */
const priority = {
  '/': 1.0,
  '/services': 0.9,
  '/contact': 0.8,
  '/gallery': 0.7,
  '/about': 0.7,
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        item.lastmod = new Date().toISOString();
        item.changefreq = /** @type {any} */ (path === '/' || path === '/gallery' ? 'weekly' : 'monthly');
        item.priority = priority[path] ?? 0.3;
        return item;
      },
    }),
  ],
});
