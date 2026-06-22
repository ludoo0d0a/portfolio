import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		tagline: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		links: z
			.object({
				demo: z.url().optional(),
				github: z.url().optional(),
				store: z.url().optional(),
			})
			.default({}),
		image: z.string(),
		imageFit: z.enum(['cover', 'contain']).default('cover'),
		featured: z.boolean().default(true),
		order: z.number(),
	}),
});

export const collections = { projects };
