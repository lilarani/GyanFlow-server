import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import cookieParser from 'cookie-parser';

import connectMongoDB from './config.js';
import userRouter from './routes/routeForUser.js';
import instructorActions from './routes/routeForInstructor.js';
import courseRouter from './routes/routeForCours.js';
import quizRoute from './routes/quizRoute.js';
import enrollRouter from './routes/routeForEnroll.js';
import mongoose, { Mongoose } from 'mongoose';
import Message from './models/messageModel.js';
import User from './models/userModel.js';

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

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

const onlineUsers = new Map();
io.on('connection', (socket) => {
    console.log(`${socket.id} connected 1`);

    socket.on('userConnected', async (userId) => {
        onlineUsers.set(userId, socket.id);
        console.log('online user , ', userId)

        try {
            let res = await User.findOneAndUpdate(
                { _id: new mongoose.Types.ObjectId(userId) },
                {
                    isOnline: true,
                    lastActive: Date.now()
                },
                { upsert: true }
            );
            console.log(`User with _id ${userId} is now online`);
            console.log('our update user status response = ', res)
        } catch (err) {
            console.error('Error saving user status:', err);
        }
        io.emit('updateUserStatus', { userId, isOnline: true });
    });

    socket.on("getMessages", async ({ senderId, receiverId }) => {
        try {
            console.log({ senderId, receiverId })
            const messages = await Message.find({
                $and: [
                    { senderId: { $in: [senderId, receiverId] } },
                    { receiverId: { $in: [senderId, receiverId] } }
                ]
            }).sort({ timestamp: 1 });
            console.log("my message = ", messages)

            socket.emit("messageHistory", messages); 
        } catch (err) {
            console.error(err);
        }
    });


    socket.on('sendMessage', async (data) => {
        const { senderId, receiverId, text, imageUrl, messageType } = data;
        console.log(data)
        try {
            const newMessage = await Message.create({
                senderId,
                receiverId,
                content: text,
                imageUrl,
                messageType: 'text',
            });
            console.log(newMessage, "my new message")
            console.log('resive socket id ', receiverId)
            io.emit('receiveMessage', newMessage);
        } catch (error) {
            console.error('my messag is not working', error);
        }
    });

    socket.on('markAsSeen', async ({ messageIds }) => {
        try {
            await Message.updateMany(
                { _id: { $in: messageIds } },
                { $set: { seen: true } }
            );
        } catch (err) {
            console.error('Seen status update failed:', err);
        }
    });

    socket.on('disconnect', () => {
        const userId = onlineUsers.get(socket.id);
        if (userId) {
            onlineUsers.delete(socket.id);
            io.emit('updateUserStatus', { userId, isOnline: false });
            console.log(` ${userId} disconnected`);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
