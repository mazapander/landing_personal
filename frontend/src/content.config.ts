import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
})

const services = defineCollection({
  schema: z.object({ title: z.string(), description: z.string(), order: z.number().int() }),
})

const notes = defineCollection({
  schema: z.object({ title: z.string(), description: z.string(), publishedAt: z.coerce.date(), draft: z.boolean().default(false) }),
})

export const collections = { projects, services, notes }
