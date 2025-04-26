import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  date: String,
  link: String,
  thumbnail: String,
});

const Announcement = mongoose.model("Annoncement", announcementSchema);
export default Announcement;
