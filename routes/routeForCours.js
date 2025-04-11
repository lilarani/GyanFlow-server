<<<<<<< HEAD
import express from "express";
=======
import express from 'express';
>>>>>>> 53a974f2adc98cac9a659988476d076337e3a596
import {
  addCourse,
  getAllPost,
  courseForInstructor,
<<<<<<< HEAD
} from "../controllers/courseController.js";
import verifyToken from "./../middlewares/verifytoken.js";
import verifyAdmin from "./../middlewares/verifyAdmin.js";
let router = express.Router();

router.post("/add-course", verifyToken, verifyAdmin, addCourse);
router.get("/all-course", verifyToken, getAllPost);
router.get("/course-for-instructor/:id", courseForInstructor);
=======
  deleteCourse,
  featuresCourse,
  featuresCourseDetails,
} from '../controllers/courseController.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from './../middlewares/verifyAdmin.js';
let router = express.Router();

router.post('/add-course', verifyToken, verifyAdmin, addCourse);
router.get('/all-course', verifyToken, getAllPost);
router.get('/course-for-instructor/:id', courseForInstructor);
router.delete('/course/:id', deleteCourse);
router.get('/features-course', featuresCourse);
router.get('/features-course/:id', featuresCourseDetails);

>>>>>>> 53a974f2adc98cac9a659988476d076337e3a596
export default router;
