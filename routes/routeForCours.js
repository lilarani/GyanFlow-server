import express from 'express';
import {
  addCourse,
  getAllPost,
  courseForInstructor,
} from '../controllers/courseController.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from './../middlewares/verifyAdmin.js';
let router = express.Router();

router.post('/add-course', verifyToken, verifyAdmin, addCourse);
router.get('/all-course', verifyToken, getAllPost);
router.get('/course-for-instructor/:id', courseForInstructor);
export default router;
