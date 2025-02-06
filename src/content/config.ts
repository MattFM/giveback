import { defineCollection, z } from 'astro:content';
import { notionLoader } from "notion-astro-loader";
import {
	notionPageSchema,
	propertySchema,
	transformedPropertySchema,
  } from "notion-astro-loader/schemas";

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
    	seoTitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    	tags: z.array(z.string()).optional(),
		coverImage: image()
      .refine((img) => img.width >= 960, {
        message: 'Cover image must be at least 960 pixels wide!'
      })
      .optional()
	}),
});

const database = defineCollection({
	loader: notionLoader({
	  auth: import.meta.env.NOTION_TOKEN,
	  database_id: import.meta.env.NOTION_DATABASE_ID,
	  // Use Notion sorting and filtering
	  /*filter: {
		property: "Status",
		select: { equals: "Published" },
	  },*/
	}),
  });

export const collections = { blog, database };
