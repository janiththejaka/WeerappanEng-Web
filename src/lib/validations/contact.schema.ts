import { z } from "zod";

export const contactSchema =
  z.object({
    name: z.string().min(2),

    email: z.email(),

    whatsapp: z.string().min(8),

    subject: z.string().min(2),

    message: z.string().min(10),
  });

export type ContactFormData =
  z.infer<typeof contactSchema>;