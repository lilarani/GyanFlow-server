import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String },
    role: { type: String, default: 'student' },
    picture: { type: String, required: true, default: "" },
    bio: { type: String, default: "" },
    isOnline: Boolean,
    lastActive: { type: Date, default: Date.now },
}, { timestamps: true })

const User = mongoose.model("User", userSchema);


export default User;


