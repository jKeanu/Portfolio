import nodemailer from 'nodemailer'

export default class Email{
    constructor(name, email, message){
        this.to = process.env.PERSONAL_EMAIL;
        this.from = `Portfolio <${process.env.EMAIL_FROM}>`
        this.name = name
        this.email = email
        this.message = message
    }
    newTransport(){
        if(process.env.NODE_ENV === 'production'){
            // sendgrid
            return nodemailer.createTransport({
                host: 'in-v3.mailjet.com',
                port: 587,
                auth: {
                    user: process.env.MAILJET_API_KEY,
                    pass: process.env.MAILJET_API_SECRET
            }});
        }
        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }

    async send(subject, text){
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            text
        }; 
        await this.newTransport().sendMail(mailOptions);
    }

    async sendMessage(){
        await this.send(
            `A message from ${this.name}`,
            `This message is from ${this.name} (${this.email}):\n\n${this.message}`
        )
    }
}
