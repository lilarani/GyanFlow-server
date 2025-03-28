import mongoose from "mongoose";

  const courseSchema = new mongoose.Schema({
    title: String,
    shortDescription: String,
    description: String,
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    totalDuration: Number,
    enrollCount: Number,
    seatLeft: Number,
    batch: Number,
    price: Number,
    thumbnail: String,
    studyPlan: [String],
    totalLectures: Number,
    rating: Number,
    status: {
      type: String,
    }

}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export default Course;
