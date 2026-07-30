import "dotenv/config";
import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log("Creating email...");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

${message}
`,
    });

    console.log("✅ Email sent successfully!");
    console.log(info);

    return info;
  } catch (err) {
    console.error("SendMail Error:");
    console.error(err);
    throw err;
  }
};