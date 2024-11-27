import express, { Application } from 'express';
import dotenv from 'dotenv';
import { authRoutes } from '@/routes';
import session from 'express-session';

// env
const envFile =
  process.env.ENV_MODE === 'production'
    ? '.env.production'
    : '.env.development';
dotenv.config({ path: envFile });

const app: Application = express();
const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    secure: false,
  },
};

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

// routes
app.use('/auth', authRoutes);

export { app };
