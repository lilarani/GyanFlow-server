import getToken from './tokenGenaratuon.js';
import User from './../models/userModel.js';

let setTooken = async (req, res) => {
  let { name, email, picture } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    const token = getToken(email);
    res.cookie('token', token, {
      httpOnly: true,
    });

    return res.status(200).send({
      tokenCapture: true,
      success: true,
      data: {
        name,
        email,
      },
    });
  }

  let myUser = new User({
    name,
    email,
    picture,
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
    },
  });
};

export default setTooken;
