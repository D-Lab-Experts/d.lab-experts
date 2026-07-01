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
  // PT-BR is the default locale (served at the root); English is an
  // alternate served under /en. Pages are authored per-locale (route
  // wrappers under src/pages/en mirror the root ones), so we keep the
  // default locale un-prefixed.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-BR',
          en: 'en',
        },
      },
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
