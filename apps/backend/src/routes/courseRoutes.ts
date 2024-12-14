import { courseController } from '@/controllers';
import { checkRoles, validate, validateToken } from '@/middlewares';
import { multerPhotoService } from '@/services';
import { updateCourseSchema } from '@/validations';
import express from 'express';

const router = express.Router();
const INPUT_NAME = {
  PHOTO: 'photo',
  VIDEO: 'video',
};

router.post(
  '/',
  checkRoles('mentor'),
  multerPhotoService.singleUpload(INPUT_NAME.PHOTO),
  courseController.createCourse,
);
router.patch(
  '/:id',
  validate(updateCourseSchema),
  courseController.updateCourse,
);
router.get('/', validateToken(), courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

export { router };
