import express from 'express';
import {
  initPayment,
  paymentSuccess,
} from '../controllers/enrollController.js';

const router = express.Router();

router.post('/init', initPayment);
router.post('/success/:tran_id', paymentSuccess);

export default router;
