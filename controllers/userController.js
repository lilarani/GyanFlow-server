<<<<<<< HEAD
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import getToken from '../utils/tokenGenaratuon.js';

let userRegister = async (req, res) => {
  try {
    let { name, email, phone, password, role, picture, bio } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: 'user already exists',
      });
=======
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import getToken from "../utils/tokenGenaratuon.js";



let userRegister = async (req, res) => {
    try {
        console.log(req.body)
        let { name, email, phone, password, role, picture, bio } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({
                success: false,
                message: 'user already exists'
            })
        }
        let encriptade = await bcrypt.hash(password, 10)
        let myUser = new User({
            name, email, phone, password: encriptade, role, picture, bio
        })
        await myUser.save()

        const token = getToken(email);
        res.cookie('token', token, {
            httpOnly: true,

        })

        res.status(200).send({
            tokenCapture: true,
            success: true,
            data: {
                name,
                email,
                phone,
                role
            }
        })

    } catch (e) {
        res.status(200).send({
            success: false,
            message: e.message
        })

>>>>>>> d09fb578934b75798041103c6678d379089d1c02
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
<<<<<<< HEAD
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).send({
        success: false,
        message: 'incorrect information',
      });
=======
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).send({
                success: false,
                message: 'incorrect information'
            })
        }
        const token = getToken(email);
        res.cookie('token', token, {
            httpOnly: true,

        })
        console.log("login token ", token)
        res.status(200).send({
            tokenCapture: true,
            success: true,
            data: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        })
    } catch (e) {
        res.status(404).send({
            success: false,
            message: "user can't login"
        })
>>>>>>> d09fb578934b75798041103c6678d379089d1c02
    }
    const token = getToken(email);
    res.cookie('token', token, {
      httpOnly: true,
    });
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

<<<<<<< HEAD
export { userRegister, loginUser };
=======

let logoutUser = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
    
    });
    res.status(200).send("Logged out successfully");
}

export { userRegister, loginUser, logoutUser };
>>>>>>> d09fb578934b75798041103c6678d379089d1c02
