import express, { Application } from 'express';
import dotenv from 'dotenv';
import { authRoutes } from '@/routes';

// env
const envFile =
  process.env.ENV_MODE === 'production'
    ? '.env.production'
    : '.env.development';
dotenv.config({ path: envFile });

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/auth', authRoutes);

export { app };
