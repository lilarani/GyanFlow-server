import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  date: Date,
  link: String,
});

const Announcement = mongoose.model("Annoncement", announcementSchema);
export default Announcement;
