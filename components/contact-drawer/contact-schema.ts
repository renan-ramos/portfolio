import { z } from 'zod'

type ContactMessages = Record<'required' | 'invalidEmail' | 'tooLong', string>

export const createContactSchema = (messages: ContactMessages) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, messages.required)
      .max(200, messages.tooLong),
    email: z.email(messages.invalidEmail),
    message: z
      .string()
      .trim()
      .min(1, messages.required)
      .max(5000, messages.tooLong)
  })
