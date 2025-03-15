
import express from 'express';
// import {userRegister} from '../controllers/userController'
import { userRegister, loginUser , logoutUser } from '../controllers/userController.js';

const router = express.Router()

router.post('/regiser' , userRegister);
router.post('/login' , loginUser)
router.get('/logout' , logoutUser)

export default router



