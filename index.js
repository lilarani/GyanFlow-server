import 'dotenv/config';  
import express from 'express';
import cors from 'cors';
import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js'
import cookieParser from 'cookie-parser';
const app = express();

const port = process.env.PORT || 4000;

app.use(cors({
    credentials : true,
    origin : ["http://localhost:5173 , http://localhost:5174"]
}));
app.use(express.json());
app.use(cookieParser())
connectMongoDB();

app.use('/gyanflow/user' , userRouter )

app.listen(port, () => console.log(`Server running on port ${port}`));
