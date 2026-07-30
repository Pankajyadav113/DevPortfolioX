import { sendEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    await sendEmail({
      name,
      email,
      subject,
      message
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully."
    });
  } catch (error) {
    next(error);
  }
};