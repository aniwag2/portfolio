import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Standalone projects you build and want to showcase.
// Add a new project by dropping a markdown file in src/content/projects/.
const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/README.md'],
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Higher numbers sort first within their group.
    order: z.number().default(0),
    date: z.coerce.date().optional(),
  }),
});

// Resume experience / roles. Edit markdown to update what's shown.
const experience = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/README.md'],
    base: './src/content/experience',
  }),
  schema: z.object({
    company: z.string(),
    role: z.string().optional(),
    period: z.string(),
    link: z.string().url().optional(),
    // Higher numbers (more recent roles) sort to the top.
    order: z.number().default(0),
  }),
});

export const collections = { projects, experience };
