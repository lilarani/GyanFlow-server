import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  PostId: { type: mongoose.Schema.Types.ObjectId },
});

const Comments = mongoose.model('Comments', commentSchema);

export default Comments;
