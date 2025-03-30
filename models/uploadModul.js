import mongoose from "mongoose";

const uploadModul = new mongoose.Schema({
    title: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    modulNo: { type: Number, required: true },
    description: { type: String },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    createdAt: { type: Date, default: Date.now },
})

// modul2 id : 67e8524082c7800f6c90900a

const UploadModul = mongoose.model("Modul" , uploadModul);
export default UploadModul;

