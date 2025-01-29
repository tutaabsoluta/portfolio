// nodemailer config
import nodemailer from "nodemailer";
import { envs } from "./envConfig";

export const transporter = nodemailer.createTransport({
  service: envs.MAILER_SERVICE,
  auth: {
    user: envs.MAILER_EMAIL,
    pass: envs.MAILER_KEY,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(`❌ Error with the email server: ${ error }`);
  } else {
    console.log("✅ Email server ready to send emails");
  }
});
