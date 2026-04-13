import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'D.Lab Research',
    description:
      'Pesquisa aberta, análises de tendência e estudos de mercado publicados pelo D.Lab Experts.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>pt-BR</language>',
  });
}
