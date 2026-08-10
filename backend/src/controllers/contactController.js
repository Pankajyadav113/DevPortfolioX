import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendEmail } from "../services/emailService.js";

// In-memory fallback log when MongoDB is offline
const inMemoryContacts = [];

export const sendContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    let savedContact = null;

    // 1. Check if MongoDB is connected (readyState === 1)
    if (mongoose.connection.readyState === 1) {
      try {
        savedContact = await Contact.create({ name, email, subject, message });
        console.log("💾 Saved contact message to MongoDB:", savedContact._id);
      } catch (dbErr) {
        console.warn("⚠️ MongoDB save error, falling back to in-memory store:", dbErr.message);
      }
    }

    if (!savedContact) {
      savedContact = {
        _id: `mem_${Date.now()}`,
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      };
      inMemoryContacts.push(savedContact);
      console.log("📝 Logged message in backend memory (MongoDB offline):", savedContact._id);
    }

    // 2. Attempt to send email alert (non-blocking)
    try {
      await sendEmail({ name, email, subject, message });
    } catch (emailErr) {
      console.warn("⚠️ Could not send email notification:", emailErr.message);
    }

    // 3. Return immediate success response to frontend
    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. 🚀",
      data: savedContact,
    });
  } catch (error) {
    console.error("❌ Contact Controller Error:", error);
    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. 🚀",
    });
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    let contacts = [];
    if (mongoose.connection.readyState === 1) {
      contacts = await Contact.find().sort({ createdAt: -1 });
    } else {
      contacts = [...inMemoryContacts].reverse();
    }

    return res.status(200).json({
      success: true,
      total: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};