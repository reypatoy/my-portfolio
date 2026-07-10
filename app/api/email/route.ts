import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json()

    await new Promise(res => setTimeout(res, 20000))

    // return NextResponse.json({ errorMessage: 'Error sending email'}, { status: 500 })
    return NextResponse.json({ message: 'Mail sent successfully'})
    
}