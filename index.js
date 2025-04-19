import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js';
<<<<<<< HEAD
import routeForAnnouncement from './routes/routeForAnnouncement.js';
=======
import routeForAnnouncement from './routes/routeForAnnouncement.js'
import statsRoute from './routes/statsRoute.js'
>>>>>>> 7903b619dd270cee3bed99f65b435da59228cfcb
import instructorActions from './routes/routeForInstructor.js';
import courseRouter from './routes/routeForCours.js';
import cookieParser from 'cookie-parser';
import User from './models/userModel.js';
import Course from './models/coursesMode.js';
import Enrollement from './models/enroleModel.js';
import quizRoute from './routes/quizRoute.js';
import enrollRouter from './routes/routeForEnroll.js';
import { addAnnouncement } from './controllers/announcementController.js';
import chatbotRouter from './routes/routerForChatbot.js';
const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectMongoDB();

app.use('/gyanflow/user', userRouter);
app.use('/gyanflow/cours', courseRouter);
app.use('/gyanflow/quiz', quizRoute);
app.use('/gyanflow/instructor', instructorActions);
app.use('/gyanflow/ssl-payment', enrollRouter);
<<<<<<< HEAD
app.use('/gyanflow/annoucement', routeForAnnouncement);
app.use('/gyanflow/chatbot', chatbotRouter);
=======
app.use('/gyanflow/annoucement',routeForAnnouncement);
app.use('/gyanflow/all-stats',statsRoute);
>>>>>>> 7903b619dd270cee3bed99f65b435da59228cfcb
app.listen(port, () => console.log(`Server running on port ${port}`));
