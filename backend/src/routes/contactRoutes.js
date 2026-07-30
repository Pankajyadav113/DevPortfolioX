import express from "express";

import {
  sendContactMessage,
  getAllContacts,
} from "../controllers/contactController.js";

import { contactValidation } from "../middleware/validateContact.js";

const router = express.Router();

router.post("/",  sendContactMessage);

router.get("/", getAllContacts);

export default router;