import express from 'express';
import verifyAdmin from './../middlewares/verifyAdmin.js';
import { addAnnouncement } from '../controllers/announcementController.js';
import { getAllAnnouncement } from '../controllers/announcementController.js';
import verifyToken from '../middlewares/verifytoken.js';
let router = express.Router();

router.post('/addAnnouncement', verifyToken, verifyAdmin, addAnnouncement);
router.get('/all-announcement', getAllAnnouncement);

export default router;
