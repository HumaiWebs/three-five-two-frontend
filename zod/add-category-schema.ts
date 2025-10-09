import z from "zod";

export const addCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable(),
  parent: z.string().optional().nullable(),
});

export type AddCategorySchema = z.infer<typeof addCategorySchema>;