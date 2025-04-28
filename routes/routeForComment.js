import express from 'express';
import { createComment } from '../controllers/CommentsController.js';
const router = express.Router();

router.post('/user-comment', createComment);
export default router;
