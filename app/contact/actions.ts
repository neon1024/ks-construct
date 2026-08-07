"use server";

import { COMPANY } from "@/constants";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
        await resend.emails.send({
            from: `${COMPANY.NAME} <${COMPANY.EMAIL}>`,
            to: COMPANY.EMAIL,
            subject: `New contact request from ${name}`,
            replyTo: email?.toString(),
            text: `
        Name: ${name}
        Email: ${email}        
        Message: ${message}
        `,
        });
    } else {
        // TODO
        window.alert("Error while sending the email");
    }
}
