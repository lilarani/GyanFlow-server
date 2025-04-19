import express from 'express';
import {
    courseStats
} from '../controllers/statsController.js'

let router = express.Router();

router.get('/stats', courseStats);

export default router;