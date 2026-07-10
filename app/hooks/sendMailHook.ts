import { useState } from "react";
import { mailService } from "../services/mailService";
import { Mail } from "../schema/mail";

export default function sendMailHook() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'success'>('idle')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const sendMail = async (body: Mail) => {
        setStatus('sending')
        const response = await mailService.send(body)
        console.log("response: ", response);
        
        if(!response.success) {
            setStatus('error')
            setErrorMessage(response.errorMessage as string)
        } else {
            setErrorMessage('')
            setStatus('success')
        }
    
        setTimeout(() => setStatus('idle'), 3000)
    }


    return {
        sendMail,
        status,
        errorMessage
    }
}