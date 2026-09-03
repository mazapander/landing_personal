import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    externalUrl: z.url().optional(),
    architecture: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    capabilities: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
})

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({ title: z.string(), description: z.string(), outcomes: z.array(z.string()).default([]), order: z.number().int(), draft: z.boolean().default(false) }),
})

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
  schema: z.object({ title: z.string(), description: z.string(), publishedAt: z.coerce.date(), draft: z.boolean().default(false) }),
})

export const collections = { projects, services, notes }
