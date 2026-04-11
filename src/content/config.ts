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
    mechanisms: z.array(z.string()).default([]),
    organs: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    comparators: z.array(z.string()).default([]),
    phase: z.number().default(1),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const mechanisms = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/mechanisms' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    status: z.enum(['published', 'draft', 'candidate']).default('draft'),
    definition: z.string(),
    caseStudies: z.array(z.string()).default([]),
    relatedMechanisms: z.array(z.string()).default([]),
    phase: z.number().default(1),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
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
    caseStudies: z.array(z.string()).default([]),
    mechanisms: z.array(z.string()).default([]),
    phase: z.number().default(1),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    proposedBy: z.string().optional(),
    mechanisms: z.array(z.string()).default([]),
    caseStudies: z.array(z.string()).default([]),
    phase: z.number().default(3),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const futureChallenges = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/future-challenges' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    mechanisms: z.array(z.string()).default([]),
    organs: z.array(z.string()).default([]),
    phase: z.number().default(3),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const explainers = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/explainers' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    summary: z.string(),
    relatedCaseStudies: z.array(z.string()).default([]),
    phase: z.number().default(2),
    dateAdded: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft']).default('draft'),
    order: z.number().default(0),
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
