import nodemailer, { Transporter } from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adpter"

export class NodemailerMailAdapter implements MailAdapter{
  constructor(){
    this.transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS
      }
    })
  }

  transport: Transporter;

  async sendMail({ body, subject }: SendMailData){
    await this.transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: `Ismael <ismael@feedget.com>`,
      subject,
      html: body
    })
  }
}