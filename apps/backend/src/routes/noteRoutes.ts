import { noteController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.get('/:noteId', noteController.getDetailNote);
router.get('/', noteController.getNotesByUsername);
router.post('/', noteController.createNote);

export { router };
