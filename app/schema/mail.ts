import z from 'zod'


export const mailSchema = z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string()
})

export type Mail = z.infer<typeof mailSchema>