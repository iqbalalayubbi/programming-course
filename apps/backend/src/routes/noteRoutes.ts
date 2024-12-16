import { noteController } from '@/controllers';
import express from 'express';

const router = express.Router();

// router.get('/', noteController.);
router.post('/', noteController.createNote);
// router.post('/:noteId', dashboardController.getStudentCoursesDetails);

export { router };
