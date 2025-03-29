import mongoose from 'mongoose';

<<<<<<< HEAD
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
  },
});
const Course = mongoose.model('Course', courseSchema);
=======
  const courseSchema = new mongoose.Schema({
    title: String,
    shortDescription: String,
    description: String,
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    categoryId: String,
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
>>>>>>> a5d17fedb0647863002cc5f076253cd5cf8b2394
export default Course;
