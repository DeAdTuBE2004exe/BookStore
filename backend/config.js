import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';
