import { userController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.get('/', userController.orderUsersByPoint);

export { router };
