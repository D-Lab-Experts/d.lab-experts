import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    // Concise executive summary used by TL;DR cards and AI engines.
    excerpt: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('D.Lab Research'),
    // Track determines which section the post appears under on /blog.
    // 'intelligence' = pesquisa/inteligência (default); 'cybersec' = cybersegurança.
    track: z.enum(['intelligence', 'cybersec']).default('intelligence'),
    // Research type splits each track into two sub-sections on /blog:
    // 'original'  = primary data collected by the lab (our own surveys,
    //               interviews, instrumentation, pentests, etc.)
    // 'secondary' = desk research / analysis of third-party sources
    //               (SEBRAE/IBGE/FGV compilations, threat intel reports,
    //                open data, industry studies).
    researchType: z.enum(['original', 'secondary']).default('secondary'),
    // Editorial format of the publication. Aligns with the Research Hub
    // content taxonomy so readers can pick by time/depth/purpose:
    // 'briefing'  = 3-5 min executive read (panorama + recommendation)
    // 'report'    = 12-30 min deep dive (primary research or compilation)
    // 'foresight' = short, sharp, future-looking piece (AI, cyber, frontier tech)
    // 'sector'    = market/sector analysis for founders and investors
    format: z.enum(['briefing', 'report', 'foresight', 'sector']).default('report'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    // Long-tail SEO keywords (in addition to tags)
    keywords: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // FAQ pairs for FAQPage schema (great for AI overviews)
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
