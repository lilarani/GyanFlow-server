import express from 'express';
import { addModul, allVideos , allModules } from "../controllers/modulController.js";
import { addVideo } from "../controllers/videoController.js";
let router = express.Router();



router.post('/add-module', addModul);
router.post('/add-video', addVideo)
router.get('/all-videos/:id', allVideos)
router.get('/all-modules/:id', allModules)

export default router

