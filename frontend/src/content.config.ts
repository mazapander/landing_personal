import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
    architecture: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    capabilities: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
})

const services = defineCollection({
  schema: z.object({ title: z.string(), description: z.string(), order: z.number().int(), draft: z.boolean().default(false) }),
})

const notes = defineCollection({
  schema: z.object({ title: z.string(), description: z.string(), publishedAt: z.coerce.date(), draft: z.boolean().default(false) }),
})

export const collections = { projects, services, notes }
