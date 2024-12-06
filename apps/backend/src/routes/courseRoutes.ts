import { courseController } from '@/controllers';
import { checkRoles, validate } from '@/middlewares';
import { createCourseSchema, updateCourseSchema } from '@/validations';
import express from 'express';

const router = express.Router();

router.post(
  '/',
  checkRoles('mentor'),
  validate(createCourseSchema),
  courseController.createCourse,
);
router.patch(
  '/:id',
  validate(updateCourseSchema),
  courseController.updateCourse,
);

export { router };
