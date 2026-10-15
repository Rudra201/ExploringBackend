import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_Name } from './constants.js';
import express from 'express';
import connectDB from './db/indexDb.js';


dotenv.config({path: './.env'});
const app = express();

connectDB()
























/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
      app.on('error', (err) => {
        console.error('Express server error:', err);
        throw err; // Rethrow the error to be caught by the outer try-catch

      });

app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });


    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
})();*/










