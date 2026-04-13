// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dlabexperts.com',
  integrations: [mdx(), sitemap()],
  // EN primary at the root; PT-BR for Brazilian partners under /pt.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Hover-prefetch in-site links so nav between hub pages feels
  // instant. Only fires on `<a>` elements Astro can resolve, so
  // external links stay untouched.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
