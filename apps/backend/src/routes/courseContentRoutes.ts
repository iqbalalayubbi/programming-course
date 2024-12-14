import { courseContentController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/:courseId', courseContentController.createCourseContent);

router.patch('/:courseContentId', courseContentController.updateCourseContent);

router.get('/', courseContentController.getCourseContentByPage);

router.get('/:courseId', courseContentController.getCourseContents);

export { router };
