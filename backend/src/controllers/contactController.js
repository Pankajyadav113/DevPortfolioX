import Contact from "../models/Contact.js";
import { sendEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send Email
    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};