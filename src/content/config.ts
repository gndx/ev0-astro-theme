import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    categories: z.array(z.string()).default(['others']),
    tags: z.array(z.string()).default(['others']),
    authors: z.array(z.string()).default(['mcfly']),
    affiliateLink: z.boolean().default(false),
  }),
});

const short = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    categories: z.array(z.string()).default(['others']),
    tags: z.array(z.string()).default(['others']),
    authors: z.array(z.string()).default(['mcfly']),
    affiliateLink: z.boolean().default(false),
  }),
});

export const collections = { blog, short };
