'use client'

import { useEffect, useState } from "react";
import TextInput from "./reusables/textInput";
import TextArea from "./reusables/textAea";
import Button from "./reusables/button";
import sendMailHook from "@/app/hooks/sendMailHook";
import Snackbar from "./reusables/snackbar";

export default function Connect() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const [snackbar, setSnackbar] = useState<{ message: string; type: "success" | "error"; } | null>(null);

    const { sendMail, status, errorMessage } = sendMailHook()

    const handleSendMessage = async () => {
        await sendMail({
            name,
            email,
            subject,
            message
        }) 
    }
    
    useEffect(() => {
        if(status === 'idle') {
            return
        }

        if(status === 'error') {
            setSnackbar({
                message: errorMessage,
                type: "error",
            });
        } 

        if(status === 'success') {
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setSnackbar({
                message: "Your message has been sent successfully!",
                type: "success",
            });
        }
        setTimeout(() => setSnackbar(null), 5000);
    }, [status])

    return (
        <section id="hire-me" className="section-shell scroll-mt-20">
            <div className="glass-panel rounded-[28px] border border-slate-800/80 px-4 py-8 sm:px-6 md:px-10 md:py-12">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="eyebrow">Let&apos;s Build</span>
                    <h1 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">Hire Me</h1>
                    <p className="mt-3 text-base text-slate-300 md:text-lg">I&apos;d love to hear from you.</p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div>
                            <TextInput 
                                label="Name"
                                placeHolder="John Doe"
                                value={ name }
                                setValue={ setName }
                            />
                        </div>
                        <div>
                            <TextInput 
                                label="Email"
                                placeHolder="john@example.com"
                                value={ email }
                                setValue={ setEmail }
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <TextInput 
                            label="Subject"
                            placeHolder="How can I help"
                            value={ subject }
                            setValue={ setSubject }
                        />
                    </div>
                    <div className="mt-4">
                        <TextArea 
                            label="Message"
                            placeHolder="Tell me about your project..."
                            value={ message }
                            setValue={ setMessage }
                        />
                    </div>
                    <div className="mt-5">
                        <Button label="Send Message" type="button" onClick={ handleSendMessage } isLoading={ status === 'sending' }/>
                    </div>
                    <div className="mt-5 text-center text-sm text-slate-300">
                        <p>Thank you!</p>
                        <p className="mt-1">I&apos;ll reply within 24 hours.</p>
                    </div>
                </div>
            </div>
            {snackbar && (
                <Snackbar
                    message={snackbar.message}
                    type={snackbar.type}
                />
            )}
        </section>
    )
}