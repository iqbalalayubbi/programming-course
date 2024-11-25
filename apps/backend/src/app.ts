import express, { Application } from 'express';
import dotenv from 'dotenv';
import { authRoutes } from '@/routes';

// env
dotenv.config();

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/auth', authRoutes);

export { app };
