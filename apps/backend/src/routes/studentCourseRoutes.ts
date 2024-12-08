import { studentCourseController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', studentCourseController.createStudentCourse);

export { router };
