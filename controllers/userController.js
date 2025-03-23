import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import getToken from '../utils/tokenGenaratuon.js';

let userRegister = async (req, res) => {
  try {
    console.log(req.body);
    let { name, email, phone, password, role, picture, bio } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: 'user already exists',
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
    res.cookie('token', token, {
      httpOnly: true,
    });

    res.status(200).send({
      tokenCapture: true,
      success: true,
      data: {
        name,
        email,
        phone,
        role,
      },
    });
  } catch (e) {
    res.status(200).send({
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
        message: 'incorrect information',
      });
    }
    const token = getToken(email);
    res.cookie('token', token, {
      httpOnly: true,
    });
    console.log('login token ', token);
    res.status(200).send({
      tokenCapture: true,
      success: true,
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      message: "user can't login",
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
    res.cookie('token', token, {
      httpOnly: true,
    });

    console.log('login token ', token);
    res.status(200).send({
      tokenCapture: true,
      success: true,
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
  });
  res.status(200).send('Logged out successfully');
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

let deleteUser = async (req, res) => {
  try {
    let userEmail = req.params.email;
    console.log(userEmail, 'delete user');
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

export {
  userRegister,
  loginUser,
  logoutUser,
  ourAllUsers,
  userRole,
  deleteUser,
};
