import { studentCourseController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', studentCourseController.createStudentCourse);
router.get('/', studentCourseController.getStudentCourses);

export { router };
