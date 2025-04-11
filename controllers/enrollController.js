import 'dotenv/config';
import User from '../models/userModel.js';
import Course from '../models/coursesMode.js';
import mongoose from 'mongoose';
import axios from 'axios';
import Payment from '../models/paymentModel.js';

const store_id = process.env.SSL_STORE_ID;
const store_passwd = process.env.SSL_STORE_PASS;
const is_live = false;

const initPayment = async (req, res) => {
  const { price, email, courseID, studID, transactionId } = req.body;
  const payment = req.body;

  const studentInfo = await User.findById(studID);
  const courseInfo = await Course.findById(courseID);
  // console.log('course info', courseInfo);
  // console.log('student info', studentInfo);

  const trxid = new mongoose.Types.ObjectId().toString();
  payment.transactionId = trxid;
  // console.log(payment, 'payment ');
  const initiate = {
    store_id: 'gyanf67f68f83c6020',
    store_passwd: 'gyanf67f68f83c6020@ssl',
    total_amount: price,
    currency: 'BDT',
    tran_id: trxid, // use unique tran_id for each api call
    success_url:
      'https://gyanflow-server.onrender.com/gyanflow/ssl-payment/success-payment',

    fail_url: ' https://gyanflow-ca428.web.app/fail',
    cancel_url: ' https://gyanflow-ca428.web.app/cancel',
    ipn_url: 'https://gyanflow-server.onrender.com/ipn',
    shipping_method: 'Courier',
    product_name: courseInfo.title,
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: studentInfo.name,
    cus_email: studentInfo.email,
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    value_a: studentInfo?._id,
    value_b: courseInfo?._id,
  };

  // Send POST request to SSLCommerz
  const iniResponse = await axios({
    url: 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',
    method: 'POST',
    data: initiate,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // console.log(iniResponse);
  // const sendData = await Payment.insertOne(payment);

  const gatewayUrl = iniResponse?.data?.GatewayPageURL;
  // console.log(gatewayUrl, 'gateway url');
  res.status(200).send({ data: gatewayUrl, success: true });
};

const paymentSuccess = async (req, res) => {
  try {
    // success payment data
    const paySuccess = req.body;
    console.log(paySuccess, 'payment success info');

    // validation payment
    const { data } = await axios.get(
      ` https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${paySuccess.val_id}&store_id=gyanf67f68f83c6020&store_passwd=gyanf67f68f83c6020@ssl&format=json`
    );
    if (data.status !== 'VALID') {
      return res.send({ message: 'Invalid payment' });
    }

    const successPaymentInfo = new Payment({
      transactionId: req.body.tran_id,
      studentId: req.body.value_a,
      courseId: req.body.value_b,
    });

    await successPaymentInfo.save();

    if (data.status === 'VALID') {
      return res.redirect('http://localhost:5173/successedPayment');
    }

    console.log(isValidPayment, 'valid payment');
  } catch (err) {
    res.status(404).send({ message: 'faild payment' });
  }
};

// student courses
const studentCourses = async (req, res) => {
  const { studentId } = req.body;
  j;
  console.log(studentId, 'studentid ');
  const enrollments = await Payment.find({ studentId }).populate('courseId');
  console.log(enrollments, 'enrollment');
};

export { initPayment, paymentSuccess, studentCourses };
