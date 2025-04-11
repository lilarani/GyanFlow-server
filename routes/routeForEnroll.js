import express from 'express';
import {
  initPayment,
  paymentSuccess,
} from '../controllers/enrollController.js';

const router = express.Router();

router.post('/init', initPayment);
router.post('/success-payment', paymentSuccess);

export default router;
