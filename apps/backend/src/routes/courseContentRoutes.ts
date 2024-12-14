import { courseContentController } from '@/controllers';
import { validate } from '@/middlewares';
import { updateCourseContentSchema } from '@/validations';
import express from 'express';

const router = express.Router();

router.post('/:courseId', courseContentController.createCourseContent);

router.patch(
  '/:courseContentId',
  validate(updateCourseContentSchema),
  courseContentController.updateCourseContent,
);

// router.patch('/', )

export { router };
