import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        categories: z.array(z.string()).optional(),
	cover: image().optional(),
	draft: z.boolean().optional().default(false),
})
});

const projects = defineCollection({
    type: 'content',
    // Hacemos exactamente lo mismo para los proyectos
    schema: ({ image }) => z.object({
        title: z.string(),
  	title_en: z.string().optional(),
	description: z.string(),
 	description_en: z.string(),
        tags: z.array(z.string()).optional(),
        cover: image().optional(),
    })
});

export const collections = { posts, projects };