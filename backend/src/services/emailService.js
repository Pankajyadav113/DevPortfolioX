import "dotenv/config";
import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }) => {
  const user = process.env.EMAIL_USER || process.env.SMTP_USER || "pankaj738074@gmail.com";
  const pass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

  if (!pass || pass === "your-app-password") {
    console.warn("⚠️ EMAIL_PASS is still set to placeholder 'your-app-password' in backend/.env.");
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  console.log(`📧 Sending email notification from ${name} (${email}) to ${user}...`);

  const info = await transporter.sendMail({
    from: user,
    to: user,
    replyTo: email,
    subject: `Portfolio Message from ${name}: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #18181b;">
        <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">🚀 New Portfolio Contact Message</h2>
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e4e4e7; margin-top: 12px;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  console.log("✅ Contact email notification sent to Gmail inbox successfully!");
  return info;
};