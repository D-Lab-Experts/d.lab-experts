// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { aeoAstroIntegration } from 'aeo.js/astro';

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
    // Answer Engine Optimization (aeo.js). Roda no hook astro:build:done:
    // varre o dist/, gera os arquivos que engines de IA procuram (robots,
    // llms, sitemap, ai-index, schema.json) e injeta apenas <link
    // rel="alternate"> de descoberta no <head> das páginas — os OG/JSON-LD
    // já emitidos pelo BaseHead são detectados e NÃO são duplicados.
    aeoAstroIntegration({
      title: 'D.Lab Experts',
      description:
        'Agência e consultoria de implementação de IA. Diagnóstico, agentes e automações com impacto medido para pequenas e médias empresas.',
      url: 'https://dlabexperts.com',
      generators: {
        robotsTxt: true,
        llmsTxt: true,
        llmsFullTxt: true,
        sitemap: true,
        aiIndex: true,
        schema: true,
        // docs.json: referenciado pelos <link rel="alternate"> que a
        // integração injeta, então mantido ligado pra não gerar link 404.
        manifest: true,
        // Não gerar um .md por página (mantém o dist enxuto; llms-full.txt
        // já carrega o conteúdo integral pros LLMs).
        rawMarkdown: false,
      },
      robots: {
        allow: ['/'],
        sitemap: 'https://dlabexperts.com/sitemap.xml',
      },
      schema: {
        enabled: true,
        organization: {
          name: 'D.Lab Experts',
          url: 'https://dlabexperts.com',
          logo: 'https://dlabexperts.com/d.lab.png',
          sameAs: ['https://www.linkedin.com/company/d-lab-intelligence'],
        },
        defaultType: 'WebPage',
      },
      // Open Graph/Twitter já são emitidos pelo BaseHead.astro — deixa o
      // aeo fora disso pra não competir pela mesma meta.
      og: { enabled: false },
      // Sem widget Human/AI: zero JavaScript extra no cliente (pedido).
      widget: { enabled: false },
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
