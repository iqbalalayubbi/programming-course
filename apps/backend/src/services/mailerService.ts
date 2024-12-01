import nodemailer, { Transporter } from 'nodemailer';

type SendEmailType = {
  recipient: string;
  subject: string;
  text?: string;
  html?: string;
};

const DEFAULT_PORT = 587;

class MailerService {
  private transport: Transporter;

  public constructor() {
    this.transport = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: DEFAULT_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail({
    recipient,
    subject,
    text,
    html,
  }: SendEmailType): Promise<void> {
    await this.transport.sendMail({
      from: process.env.EMAIL,
      to: recipient,
      subject,
      text,
      html,
    });
  }
}

export { MailerService };
