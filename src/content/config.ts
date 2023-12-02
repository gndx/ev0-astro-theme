import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    published: z.boolean().default(['true']),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['others']),
    tags: z.array(z.string()).default(['others']),
    authors: z.array(z.string()).default(['mcfly']),
  }),
});

export const collections = { blog };
