
import express from 'express';
import { userRegister, loginUser , logoutUser, ourAllUsers, userRole } from '../controllers/userController.js';
import setTooken from './../utils/setToken.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';
import verifyTecher from '../middlewares/verifyTecher.js';

const router = express.Router()

router.post('/regiser' , userRegister);

router.post('/login' , loginUser);

router.post('/googleLogin' , setTooken);

router.get('/logout' , logoutUser);

router.get('/users',verifyToken, verifyTecher  , ourAllUsers);

router.get('/role/:email' , userRole)

export default router ;



