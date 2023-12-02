import { getCollection } from 'astro:content';
const blogEntries = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
