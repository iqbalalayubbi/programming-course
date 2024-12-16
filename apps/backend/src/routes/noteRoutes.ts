import { noteController } from '@/controllers';
import { validateToken } from '@/middlewares';
import express from 'express';

const router = express.Router();

router.get('/:noteId', validateToken(), noteController.getDetailNote);
router.get('/', validateToken(), noteController.getNotesByUsername);
router.post('/', validateToken(), noteController.createNote);
router.delete('/:noteId', validateToken(), noteController.deleteNote);

export { router };
