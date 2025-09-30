import { z } from "zod";

export type TFormContact = {
  email: string;
  name: string;
  message: string;
};

export const TFormContactSchema = z.object({
  email: z.email("Email is required"),
  name: z.string().min(2, "Name is required"),
  message: z.string().min(2, "Message is required"),
});

export type FormContactSchemaType = z.infer<typeof TFormContactSchema>;
