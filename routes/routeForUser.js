import express from 'express';
import {
  userRegister,
  loginUser,
  logoutUser,
  ourAllUsers,
  userRole,
  deleteUser,
} from '../controllers/userController.js';
import setTooken from './../utils/setToken.js';
import verifyToken from './../middlewares/verifytoken.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';

const router = express.Router();

router.post('/regiser', userRegister);

router.post('/login', loginUser);

router.post('/googleLogin', setTooken);

router.get('/logout', logoutUser);

router.get('/users', verifyToken, verifyAdmin, ourAllUsers);

router.get('/role/:email', userRole);

router.get('/role/:email', userRole);
router.delete('/deleteUser/:email', deleteUser);

export default router;
