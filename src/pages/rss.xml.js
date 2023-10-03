import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '@config/config.json';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
