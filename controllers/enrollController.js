import 'dotenv/config';
import User from '../models/userModel.js';
import Course from '../models/coursesMode.js';

const store_id = process.env.SSL_STORE_ID;
const store_passwd = process.env.SSL_STORE_PASS;
const is_live = false;

const initPayment = async (req, res) => {
  const { price, email, courseID, studID } = req.body;
  const studentInfo = await User.findById(studID);
  const courseInfo = await Course.findById(courseID);
  console.log(studentInfo);
};

const paymentSuccess = async (req, res) => {};

export { initPayment, paymentSuccess };
