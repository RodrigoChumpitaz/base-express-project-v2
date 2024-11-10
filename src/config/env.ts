import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3500;
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/express-mongo';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
