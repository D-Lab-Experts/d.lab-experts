import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Single PT-BR feed — EN posts (data.lang === 'en') are excluded so
  // the feed stays monolingual and every link resolves under /posts/.
  const posts = (await getCollection('blog', ({ data }) => !data.draft && (data.lang ?? 'pt') === 'pt'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'D.Lab Research',
    description:
      'Pesquisa aberta, análises de tendência e estudos de mercado publicados pelo D.Lab Experts.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      // Prefer the longer excerpt when declared — richer feed for
      // aggregators, press readers and research discovery tools.
      description: post.data.excerpt ?? post.data.description,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>pt-BR</language>',
  });
}
