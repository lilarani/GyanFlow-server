import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
  const res = await mongoose.connect(process.env.MongoDB_URL);

  if (res) {
    console.log('connect with database successfully');
  } else {
    console.log('something wrong');
  }
};

export default connectMongoDB;
