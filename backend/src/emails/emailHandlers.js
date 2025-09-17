import { resendClient } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js"

const sender = {
    name: process.env.EMAIL_FROM_NAME || "Chatify App",
    email: process.env.EMAIL_FROM || "onboarding@resend.dev",
};

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatify",
        html: createWelcomeEmailTemplate(name,clientURL || process.env.CLIENT_URL)
    })

    if(error){
        console.error("Error sending welcome email:", error);
        throw new Error ("Failed to send welcome email");
    }

    console.log("Welcome Email sent successfully", data);
}