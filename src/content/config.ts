import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string().optional(),
  category: z.string(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
  githubLink: z.string().optional(),
  projectLink: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string().optional(),
  blogLink: z.string().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
export type BlogSchema = z.infer<typeof blogSchema>;

const projectCollection = defineCollection({ schema: projectSchema });
const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
