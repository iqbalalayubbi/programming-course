import '@/config';
import express, { Application } from 'express';
import {
  authRoutes,
  challengeRoutes,
  challengeSubmissionRoutes,
  courseContentRoutes,
  courseRoutes,
  dashboardRoutes,
  noteRoutes,
  profileRoutes,
  skillRoutes,
  studentCourseRoutes,
  uploadRoutes,
  userRoutes,
  userSkillRoutes,
} from '@/routes';
import session from 'express-session';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

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

// logger
app.use(morgan('tiny'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(cors({ origin: process.env.CLIENT_ENDPOINT }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads/photos')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads/videos')));

// routes
app.use('/auth', authRoutes);
app.use('/skills', skillRoutes);
app.use('/user-skills', userSkillRoutes);
app.use('/courses', courseRoutes);
app.use('/course-contents', courseContentRoutes);
app.use('/student-courses', studentCourseRoutes);
app.use('/profile', profileRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/upload', uploadRoutes);
app.use('/notes', noteRoutes);
app.use('/challenges', challengeRoutes);
app.use('/challenge-submissions', challengeSubmissionRoutes);
app.use('/users', userRoutes);

export { app };
