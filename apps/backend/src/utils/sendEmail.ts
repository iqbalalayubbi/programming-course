import nodemailer from 'nodemailer';

type Params = {
  recipient: string;
  subject: string;
  text?: string;
  html?: string;
};

const DEFAULT_PORT = 587;

const sendEmail = async ({ recipient, subject, text, html }: Params) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: DEFAULT_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: recipient,
    subject,
    text,
    html,
  });
};

export { sendEmail };
