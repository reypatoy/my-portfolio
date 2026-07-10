import { logger } from "../lib/logger"
import { Mail } from "../schema/mail"

export const mailService = {
    send: async (body: Mail): Promise<{ success: boolean; errorMessage?: string}> => {
        try {
            const response = await fetch('/api/email', {
               method: 'Post',
               body: JSON.stringify({
                   name: body.name,
                   email: body.email,
                   subject: body.subject,
                   message: body.message
               })
           })
           if(!response.ok) return { success: false, errorMessage: (await response.json()).message }

           return { success: true }
        } catch(e) {
            logger.error("An error occured while sending email", e)
            return { success: false, errorMessage: e as string }
        }
    }
}