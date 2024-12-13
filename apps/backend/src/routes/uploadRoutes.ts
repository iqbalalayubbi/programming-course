import { uploadController } from '@/controllers';
import { multerPhotoService, multerVideoService } from '@/services';
import express from 'express';

const router = express.Router();
const INPUT_NAME = {
  PHOTO: 'photo',
  VIDEO: 'video',
};

router.post(
  '/photo',
  multerPhotoService.singleUpload(INPUT_NAME.PHOTO),
  uploadController.uploadFile,
);

router.post(
  '/video',
  multerVideoService.singleUpload(INPUT_NAME.VIDEO),
  uploadController.uploadFile,
);

export { router };
