import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String },
  
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  totalDuration: { type: Number },
  enrollCount: { type: Number, default: 0 },
  seatLeft: { type: Number },
  batch: { type: Number },
  price: { type: Number, default: 0 },
  review: { type: String },
  thumbnail: { type: String },
  studyPlan: { type: String },
  totalLectures: { type: Number },
  rating: { type: Number, default: 0 },
  status: { type: String, enum: ["draft", "published", "archived"], default: "draft" },
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export default Course;
