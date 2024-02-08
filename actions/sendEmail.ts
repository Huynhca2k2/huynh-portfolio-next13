"use server";

import { getErrorMessage, validateString } from "@/lib/ultils";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) =>{
   
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString(message, 500)){
        return{
            error: "Invalid message"
        }
    }

    if(!validateString(senderEmail, 200)){
        return{
            error: "Invalid sender email"
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'huynhca2k2@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
            
        });
    } catch (error: unknown){
        return{
            error: getErrorMessage(error),
        }
    }

    return{
        data,
    };
    
};
