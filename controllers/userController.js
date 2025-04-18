import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import getToken from '../utils/tokenGenaratuon.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
let userRegister = async (req, res) => {
  try {
    let { name, email, phone, role, password, picture, bio } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: 'User already exists',
      });
    }
    let encriptade = await bcrypt.hash(password, 10);
    let myUser = new User({
      name,
      email,
      phone,
      password: encriptade,
      role,
      picture,
      bio,
    });

    await myUser.save();

    const token = getToken(email);

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   domain: ".gyanflow-ca428.web.app"
    // });

    res.status(200).send({
      tokenCapture: true,
      success: true,
      data: {
        token,
        name,
        email,
        phone,
        role,
      },
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).send({
        success: false,
        message: 'Incorrect information',
      });
    }
    const token = getToken(email);

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   domain: ".gyanflow-ca428.web.app"
    // });
    console.log('login token', token);

    res.status(200).send({
      tokenCapture: true,
      success: true,
      data: {
        token,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "User can't login",
    });
  }
};

let userRole = async (req, res) => {
  try {
    let email = req.params.email;
    console.log(email);

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'user not found',
      });
    }

    const token = getToken(email);
    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   domain: ".gyanflow-ca428.web.app"
    // });

    console.log('login token ', token);
    res.status(200).send({
      tokenCapture: true,
      success: true,
      token,
      data: user,
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      message: "user can't login",
      error: e.message,
    });
  }
};

let logoutUser = async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    domain: '.gyanflow-ca428.web.app',
  });
  res.status(200).send('Logged out successfully');
};

let forgotPassword = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: " No user found with this email.",
      });
    }
    // console.log('old user ' , user )

    let encryptedPassword = await bcrypt.hash(password, 10);

    user.password = encryptedPassword;
    await user.save();
    // console.log('new user ' ,user)
    res.status(200).send({
      success: true,
      message: " Password updated successfully.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: " Something went wrong.",
    });
  }
};

let ourAllUsers = async (req, res) => {
  try {
    let users = await User.find({});
    res.status(200).send({
      tokenCapture: true,
      success: true,
      data: users,
    });
  } catch (e) {
    console.log(e);
    res.status(404).send({
      success: false,
      message: 'users not found',
    });
  }
};

// delete user
let deleteUser = async (req, res) => {
  try {
    let userEmail = req.params.email;
    let query = { email: userEmail };
    let result = await User.deleteOne(query);
    res.status(200).send({
      success: true,
      message: 'delete successfull',
    });
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err.message,
    });
  }
};

let getInstructors = async (req, res) => {
  try {
    let instructors = await User.find({ role: 'instructor' }).select(
      'name _id email picture role'
    );
    res.status(200).send(instructors);
  } catch (error) {
    res.status(404).send({ message: 'Instructors not found ', error });
  }
};

// update user info
let updateUsersInfo = async (req, res) => {
  try {
    let userId = req.params.id.trim();
    let info = req.body;
    let updateUser = await User.findByIdAndUpdate(userId, info, { new: true });
    res.status(200).send({
      success: true,
      data: updateUser,
    });
  } catch (error) {
    res.status(403).send({ message: error.message, success: false });
  }
};

export {
  userRegister,
  loginUser,
  logoutUser,
  ourAllUsers,
  userRole,
  deleteUser,
  forgotPassword,
  getInstructors,
  updateUsersInfo,
};
