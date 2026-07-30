import Contact from "../models/Contact.js";
import { sendEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

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

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};