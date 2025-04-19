import express from 'express';
import { chatBot } from '../controllers/chatbotController.js';

const router = express.Router();
router.post('/chatbot-ask', chatBot);

export default router;
