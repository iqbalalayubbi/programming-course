import { courseContentController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/:courseId', courseContentController.createCourseContent);

router.patch('/:courseContentId', courseContentController.updateCourseContent);

export { router };
