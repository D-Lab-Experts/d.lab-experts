// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dlabexperts.com',
  integrations: [mdx(), sitemap()],
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
