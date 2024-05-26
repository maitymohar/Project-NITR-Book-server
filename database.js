import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection
const connectionString = process.env.MONGODB_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
