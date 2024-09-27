import { z } from "zod";

export const imageSchema = z.object({
  variant: z.literal("image"),
  /** The URL source of the image. */
  src: z.string(),
  /** Alternative text for the image. */
  alt: z.string(),
  width: z.number(),
  height: z.number(),
});

export type Image = z.infer<typeof imageSchema>;

export const copySchema = z.object({
  variant: z.literal("copy"),
  copy: z.string(),
});

export type Copy = z.infer<typeof copySchema>;

export const projectItemSchema = z.union([imageSchema, copySchema]);

export type ProjectItem = z.infer<typeof projectItemSchema>;

export const projectSchema = z.object({
  /** The title of the post. */
  title: z.string(),
  /** The URL slug. */
  slug: z.string(),
  /** The components of the post. */
  items: z.array(projectItemSchema),
});

export type Project = z.infer<typeof projectSchema>;
