import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/devportfoliox";
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000,
    });

    console.log("======================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log(` Database URI: ${mongoURI}`);
    console.log("======================================");
  } catch (error) {
    console.log("======================================");
    console.warn("⚠️ MongoDB Connection Warning:");
    console.warn(` ${error.message}`);
    console.warn(" (Running backend in standalone mode without active DB connection)");
    console.log("======================================");
  }
};

export default connectDB;