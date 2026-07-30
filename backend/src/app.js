import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/healthRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// ================= Middleware =================

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ================= Routes =================

app.use("/", healthRoutes);
app.use("/api/contact", contactRoutes);

// ================= 404 =================

app.use(notFound);

// ================= Error Handler =================

app.use(errorHandler);

export default app;