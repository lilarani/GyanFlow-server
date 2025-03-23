import express from 'express';
import { addCourse, getAllPost } from '../controllers/courseController.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from './../middlewares/verifyAdmin.js';
let router = express.Router();

router.post('/add-course', verifyToken, verifyAdmin, addCourse);
router.get('/all-course', verifyToken, verifyAdmin, getAllPost);

export default router;
