import express from "express";
import verifyAdmin from "./../middlewares/verifyAdmin.js";
import { addAnnouncement } from "../controllers/announcementController.js";
import verifyToken from "../middlewares/verifytoken.js";
import { getAllPayment } from "../controllers/paymentController.js";
let router = express.Router();

router.get("/all-payment", verifyToken, verifyAdmin, getAllPayment);

export default router;
