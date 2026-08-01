import express from "express";

import {
  sendContactMessage,
  getAllContacts,
} from "../controllers/contactController.js";

import { contactValidation } from "../middleware/validateContact.js";

const router = express.Router();

// Contact Form
router.post("/", contactValidation, sendContactMessage);

// Get All Contacts
router.get("/", getAllContacts);

export default router;