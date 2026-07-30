import express from "express";

import { sendContactMessage } from "../controllers/contactController.js";
import { contactValidation } from "../middleware/validateContact.js";

const router = express.Router();

router.post("/", contactValidation, sendContactMessage);

export default router;