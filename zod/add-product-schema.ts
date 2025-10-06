import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be non-negative"),
  category: z.string().min(1, "Category is required"),
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
  featured: z.boolean(),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;
