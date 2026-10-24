import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const changelog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/changelog',
  }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
	changelog,
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
