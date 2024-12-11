import '@/config';
import express, { Application } from 'express';
import {
  authRoutes,
  courseContentRoutes,
  courseRoutes,
  skillRoutes,
  studentCourseRoutes,
  userSkillRoutes,
} from '@/routes';
import session from 'express-session';
import cors from 'cors';
import morgan from 'morgan';

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

// routes
app.use('/auth', authRoutes);
app.use('/skills', skillRoutes);
app.use('/user-skills', userSkillRoutes);
app.use('/courses', courseRoutes);
app.use('/course-contents', courseContentRoutes);
app.use('/student-courses', studentCourseRoutes);

export { app };
