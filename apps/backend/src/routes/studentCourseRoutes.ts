import { studentCourseController } from '@/controllers';
import { validate } from '@/middlewares';
import { updateStudentCourseValidation } from '@/validations';
import express from 'express';

const router = express.Router();

router.post('/', studentCourseController.createStudentCourse);
router.get('/', studentCourseController.getStudentCourses);
router.patch(
  '/:id',
  validate(updateStudentCourseValidation),
  studentCourseController.updateStudentCourse,
);

export { router };
