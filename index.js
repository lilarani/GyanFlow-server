import 'dotenv/config';  
import express from 'express';
import cors from 'cors';
import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js'
const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectMongoDB();

app.use('/gyanflow/user' , userRouter )

app.listen(port, () => console.log(`Server running on port ${port}`));
