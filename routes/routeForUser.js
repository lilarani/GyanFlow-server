import express from 'express';
import {
  userRegister,
  loginUser,
  logoutUser,
  ourAllUsers,
  userRole,
  deleteUser,
  getInstructors,
  updateUsersInfo,
  forgotPassword,
} from '../controllers/userController.js';
import setTooken from './../utils/setToken.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';

const router = express.Router();

router.post('/regiser', userRegister);

router.post('/login', loginUser);

router.post('/googleLogin', setTooken);

router.get('/logout', logoutUser);

router.post('/forgot-pass', forgotPassword )

router.get('/users', verifyToken, verifyAdmin, ourAllUsers);

router.get('/role/:email', userRole);

router.get('/all-instructors', verifyToken, verifyAdmin, getInstructors);

router.delete('/deleteUser/:email', deleteUser);

router.put('/updateUserInfo/:id', updateUsersInfo);

export default router;
