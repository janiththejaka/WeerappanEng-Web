import { z } from "zod";

export const projectSchema = z
  .object({
    title: z
      .string()
      .min(3, "Title is required"),

    description: z
      .string()
      .min(10, "Description is required"),

    location: z
      .string()
      .min(2, "Location is required"),

    category: z
      .string()
      .min(1, "Category is required"),

    status: z.enum([
      "ONGOING",
      "COMPLETED",
    ]),

    completion_date: z
      .string()
      .nullable(),

    featured: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (
      data.status === "COMPLETED" &&
      !data.completion_date
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["completion_date"],
        message:
          "Completion date is required for completed projects",
      });
    }
  });

export type ProjectFormData =
  z.infer<typeof projectSchema>;