import { Mail } from "../schema/mail";

export const mail = {
    send: async (mail: Mail, templateId: string): Promise<{ success: boolean; errorMessage?: string }> => {
        try {
            const response = await fetch(
                    String(process.env.EMAILJS_DOMAIN),
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            service_id: process.env.EMAILJS_SERVICE_ID,
                            template_id: templateId,
                            user_id: process.env.EMAILJS_PUBLIC_KEY,
                            accessToken: process.env.EMAILJS_PRIVATE_KEY,
    
                            template_params: {
                                to_name: mail.name,
                                to_email: mail.email,
                                subject: mail.subject,
                                message: mail.message,
                            },
                        }),
                    }
                );
    
            if (!response.ok) {
                return {
                    success: false,
                    errorMessage: await response.text(),
                };
            }
    
            return { success: true }
        } catch (error) {
            return {
                success: false,
                errorMessage: error as string,
            };
        }
    }
}