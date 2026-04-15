// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Build-time snapshot used as <lastmod> for every sitemap entry.
// Every deploy stamps a fresh date, so Google (and Scholar) know to
// re-crawl. Per-URL lastmod from content dates would need a
// dual-pass setup — deferred.
const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://dlabexperts.com',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        return { ...item, lastmod: buildDate };
      },
    }),
  ],
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
