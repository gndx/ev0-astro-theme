import { defineCollection, z } from 'astro:content';

const blog = await defineCollection('blog', ({ data }) => {
  return data.draft != true;
});

export const collections = { blog };
