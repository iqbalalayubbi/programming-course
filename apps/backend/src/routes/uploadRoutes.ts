import { uploadController } from '@/controllers';
import { multerPhotoService } from '@/services';
import express from 'express';

const router = express.Router();
const INPUT_NAME = {
  PHOTO: 'photo',
  VIDEO: 'video',
};

router.post(
  '/photo',
  multerPhotoService.singleUpload(INPUT_NAME.PHOTO),
  uploadController.updateUserProfile,
);

export { router };
