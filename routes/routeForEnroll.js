import express from 'express';
import {
  initPayment,
  paymentSuccess,
  studentCourses,
} from '../controllers/enrollController.js';

const router = express.Router();

router.post('/init', initPayment);
router.post('/success-payment', paymentSuccess);
router.get('/student-courses', studentCourses);

export default router;
