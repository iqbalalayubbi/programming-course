import { dashboardController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.get('/:username', dashboardController.getStudentCoursesDetails);

export { router };
