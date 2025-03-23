import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js';
import courseRouter from './routes/routeForCours.js';
import cookieParser from 'cookie-parser';
const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://gyanflow-ca428.web.app',
      'https://gyanflow-ca428.firebaseapp.com',
    ],
  })
);
app.use(express.json());
app.use(cookieParser());
connectMongoDB();

app.use('/gyanflow/user', userRouter);
app.use('/gyanflow/cours', courseRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
