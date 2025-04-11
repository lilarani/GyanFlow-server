import express from 'express';
import {
  addCourse,
  getAllPost,
  courseForInstructor,
  deleteCourse,
  featuresCourse,
  featuresCourseDetails,
} from '../controllers/courseController.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from './../middlewares/verifyAdmin.js';

let router = express.Router();

router.post('/add-course', verifyToken, verifyAdmin, addCourse);
router.get('/all-course', getAllPost);
router.get('/course-for-instructor/:id', courseForInstructor);
router.delete('/course/:id', deleteCourse);
router.get('/features-course', featuresCourse);
router.get('/features-course/:id', featuresCourseDetails);

export default router;
