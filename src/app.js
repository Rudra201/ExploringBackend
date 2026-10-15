import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';    

dotenv.config({ path: './.env' });
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
}));

app.use(express.json({

    limit: '50mb'
}));

app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

connectDB().then(()=>{ 

app.on('error', (err) => {
  console.error('Express server error:', err);
  throw err; // Rethrow the error to be caught by the outer try-catch
})


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}).catch((error)=>{
  console.error('MongoDB connection error!!!:', error);
  process.exit(1);
}
)});