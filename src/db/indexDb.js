import mongoose from "mongoose";

import dotenv from "dotenv";
import { DB_Name } from "../constants.js";
import connectDB from "../db/indexDb.js";
dotenv.config();


connectDB().then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
} 
)

export default connectDB;
