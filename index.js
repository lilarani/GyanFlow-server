import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js';
import courseRouter from './routes/routeForCours.js';
import cookieParser from 'cookie-parser';
import User from './models/userModel.js';
import Course from './models/coursesMode.js';
import Enrollement from './models/enroleModel.js';
import Quiz from './models/QuizModel.js';

import quizRoute from "./routes/quizRoute.js"
const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors()
);
app.use(express.json());
app.use(cookieParser());
connectMongoDB();

app.use('/gyanflow/user', userRouter);
app.use('/gyanflow/cours', courseRouter);
app.use('/gyanflow/quiz', quizRoute);



app.get("/",async(req,res)=>{
  const email= req.params.email;
  const user= await User.find();
  const course = await Course.find();
  const enroll = await Enrollement.find()

  // const quiz = new Quiz({
  //   ...req.body
  // });
  // await quiz.save()
  // const updatedrole= await User.updateOne({email:req.params.email}, {role:"instructor"},{new:true})
  // const quiz = await User.find({email:req.params.email});
  res.send(user)
  
  // res.send(user)
  // res.send(enroll)
  // res.send(course)
})

app.listen(port, () => console.log(`Server running on port ${port}`));




// [
//   {
//     "_id": "67f22af8c2e953e39ac38171",
//     "title": "JavaScript Basics",
//     "description": "Test your JS fundamentals",
//     "questions": [
//       {
//         "questionText": "What is the output of 1 + '1'?",
//         "options": [
//           {
//             "text": "2",
//             "isCorrect": false,
//             "_id": "67f22af8c2e953e39ac38173"
//           },
//           {
//             "text": "'11'",
//             "isCorrect": true,
//             "_id": "67f22af8c2e953e39ac38174"
//           },
//           {
//             "text": "undefined",
//             "isCorrect": false,
//             "_id": "67f22af8c2e953e39ac38175"
//           },
//           {
//             "text": "NaN",
//             "isCorrect": false,
//             "_id": "67f22af8c2e953e39ac38176"
//           }
//         ],
//         "marks": 1,
//         "_id": "67f22af8c2e953e39ac38172"
//       },
    
//     ],
//     "durationInMinutes": 20,
//     "createdAt": "2025-04-06T07:19:20.742Z",
//     "__v": 0
//   }
// ]