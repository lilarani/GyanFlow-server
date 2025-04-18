import express from 'express';
import {
  allEnrolledCourse,
  initPayment,
  paymentSuccess,
  studentCourses,
} from '../controllers/enrollController.js';

const router = express.Router();

router.post('/init', initPayment);
router.post('/success-payment', paymentSuccess);
router.get('/student-courses/:id', studentCourses);
router.get('/allCourse', allEnrolledCourse);

export default router;
