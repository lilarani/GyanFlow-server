import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from './../models/userModel.js';

let verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  console.log('myheader ' , authHeader)
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const token = authHeader.split(' ')[1];
  console.log('hello dear verfytoken line no 13 ', token)
  // jodi token na take
  if (!token) {
    return res.status(404).send({
      success: false,
      message: 'not any tooken',
    });
  }

  jwt.verify(token, process.env.SECRET, async (error, decode) => {
    // console.log("Decoded Token:", JSON.stringify(decode));
    // console.log(`my error ${error} and my deocode ${decode}`)
    if (error) {
      return res.status(404).send({
        success: false,
        message: 'Invalid token',
      });
    }
    const user = await User.findOne({ email: decode.email });

    req.user = user;
    next();
  });
};

export default verifyToken;