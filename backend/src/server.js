// DevPortfolioX Backend Server
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log("");
    console.log("======================================");
    console.log(" DevPortfolioX Backend Started");
    console.log(` Server Running : http://localhost:${PORT}`);
    console.log("======================================");
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error("");
      console.error("======================================");
      console.error(`❌ Port ${PORT} is already in use by another process.`);
      console.error(`👉 Stop the process using port ${PORT} or set a different PORT in .env.`);
      console.error("======================================");
      process.exit(1);
    } else {
      console.error("❌ Server error:", error);
    }
  });
};

startServer();