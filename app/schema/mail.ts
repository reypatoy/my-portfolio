import z from 'zod'


export const mailSchema = z.object({
    name: z.string().min(1, { error: "Please enter your name" }),
    email: z.string().min(1, { error: "Please enter your email address" }),
    subject: z.string(),
    message: z.string().min(1, { error: "Please add a message" }),
})

export type Mail = z.infer<typeof mailSchema>