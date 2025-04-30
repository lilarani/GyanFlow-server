import express from 'express';
import { addPost, allPosts } from '../controllers/postsController.js';
const router = express.Router();

router.post('/addPosts', addPost);
router.get('/all-posts', allPosts);
export default router;
