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
        <div id="connect" className="flex flex-col justify-center items-center scroll-mt-20 gap-4 w-full mt-4 bg-[#020B16] border border-[#223041] rounded-lg px-4 py-10 shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]">
            <h1 className="text-slate-400 font-bold text-3xl font-sans tracking-tight">Get in Touch</h1>
            <span className="text-slate-500 mb-6">I'd love to hear from you</span>
            <div className="flex justify-center flex-col w-2/3 bg-[#020B16] gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                <TextInput 
                    label="Subject"
                    placeHolder="How can I help"
                    value={ subject }
                    setValue={ setSubject }
                />
                <TextArea 
                    label="Message"
                    placeHolder="Tell me about your project..."
                    value={ message }
                    setValue={ setMessage }
                />
                <Button label="Send Message" type="button" onClick={ handleSendMessage } isLoading={ status === 'sending' }/>
                <span className="text-center font-xs text-slate-500 mt-4 font-">I typically respond within 24 hours</span>
            </div>
            {snackbar && (
                <Snackbar
                    message={snackbar.message}
                    type={snackbar.type}
                />
            )}
        </div>
    )
}