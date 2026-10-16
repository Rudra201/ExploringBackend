import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_Name } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not set");
  }

  return mongoose.connect(mongoUri, { dbName: DB_Name });
};

export default connectDB;
