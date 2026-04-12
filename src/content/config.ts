import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    type: z.enum(['failure', 'success']),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    sources: z.array(z.string()).default([]),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const mechanisms = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/mechanisms' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    status: z.enum(['published', 'draft', 'candidate']).default('draft'),
    definition: z.string(),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const organs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/organs' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    status: z.enum(['published', 'draft', 'stub']).default('stub'),
    metric: z.string(),
    divergence: z.string(),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    proposedBy: z.string().optional(),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const futureChallenges = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/future-challenges' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const explainers = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/explainers' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft']).default('draft'),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'mechanisms': mechanisms,
  'organs': organs,
  'solutions': solutions,
  'future-challenges': futureChallenges,
  'explainers': explainers,
  'about': about,
};
