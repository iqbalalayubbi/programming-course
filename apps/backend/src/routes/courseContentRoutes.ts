import { courseContentController } from '@/controllers';
import { validate } from '@/middlewares';
import {
  createCourseContentSchema,
  updateCourseContentSchema,
} from '@/validations';
import express from 'express';

const router = express.Router();

router.post(
  '/:courseId',
  validate(createCourseContentSchema),
  courseContentController.createCourseContent,
);

router.patch(
  '/:courseContentId',
  validate(updateCourseContentSchema),
  courseContentController.updateCourseContent,
);

export { router };
