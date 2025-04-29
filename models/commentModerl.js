import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now() },
  userInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  postInfo: { type: mongoose.Schema.Types.ObjectId },
});

const Comments = mongoose.model('Comments', commentSchema);

export default Comments;
