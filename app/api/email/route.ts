import { mail } from "@/app/service/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const toMeMail = await mail.send(body, process.env.EMAILJS_SEND_MESSAGE_TEMPLATE_ID as string)

        if (!toMeMail.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "failed to send email.",
                },
                {
                    status: 500,
                }
            );
        }

        const confirmationMail = await mail.send(body, process.env.EMAILJS_TEMPLATE_ID as string)

        if (!confirmationMail.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "failed to send confirmation email.",
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Email sent successfully.",
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Unable to send email.",
            },
            {
                status: 500,
            }
        );
    }
}