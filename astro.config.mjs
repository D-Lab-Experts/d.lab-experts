// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dlabexperts.com',
  integrations: [mdx(), sitemap()],
  // English is the primary language for the global Research Hub
  // positioning. PT-BR stays as first-class alternate for the BR
  // audience (original research context), ES serves LatAm coverage.
  // Each locale has explicit route files (src/pages/pt/*, src/pages/
  // es/*) sharing a single page component so layout is DRY while
  // copy is dictionary-driven.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
