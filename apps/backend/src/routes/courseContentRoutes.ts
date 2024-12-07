import { courseContentController } from '@/controllers';
import { validate } from '@/middlewares';
import { createCourseContentSchema } from '@/validations';
import express from 'express';

const router = express.Router();

router.post(
  '/:courseId',
  validate(createCourseContentSchema),
  courseContentController.createCourseContent,
);

export { router };
