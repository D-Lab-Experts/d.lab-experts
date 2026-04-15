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
    // 'intelligence' = applied research (default); 'cybersec' = cybersecurity.
    track: z.enum(['intelligence', 'cybersec']).default('intelligence'),
    // Research type splits each track into two sub-sections on /blog:
    // 'original'  = primary data collected by the lab (our own surveys,
    //               interviews, instrumentation, SOC telemetry, etc.)
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

    // ── Citation metadata (Google Scholar + "Como citar" block) ──
    // Title/date/keywords are reused from the fields above. Authors are
    // declared as a proper array here so we can render one <meta
    // name="citation_author"> per author and format a correct ABNT/APA
    // citation without parsing the free-form `author` string.
    citationAuthors: z.array(z.string()).optional(),
    // Volume number in the D.Lab Research Series. Chronological.
    citationVolume: z.string().optional(),
    // BCP-47 language tag for the citation metadata. Defaults to pt-BR.
    citationLanguage: z.string().default('pt-BR'),
    // Per-author metadata for the Article's `author` schema. When
    // declared, each author becomes a `Person` (not just a name string),
    // with optional LinkedIn / ORCID / role. Improves E-E-A-T signals.
    authorsMeta: z
      .array(
        z.object({
          name: z.string(),
          linkedin: z.string().url().optional(),
          orcid: z.string().optional(),
          jobTitle: z.string().optional(),
        }),
      )
      .optional(),
    // Works cited in the post (references/bibliography). Emitted as
    // `mentions` on the Article schema so Scholar + LLMs can parse
    // the citation graph. Free-form `name` + optional URL per entry.
    mentions: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url().optional(),
          author: z.string().optional(),
        }),
      )
      .optional(),
    // Key findings — surfaced as a "Principais achados" block at the
    // top of the post AND aggregated on /imprensa for journalists.
    // Each item gets an anchor id so stats can be deep-linked.
    keyFindings: z
      .array(
        z.object({
          stat: z.string(),
          label: z.string(),
          id: z.string(),
          color: z
            .enum(['lilac', 'blue', 'cyan', 'green', 'yellow'])
            .default('lilac'),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
