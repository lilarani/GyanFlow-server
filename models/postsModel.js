import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
  description: String,
  category: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  postImage: String,
});

const Posts = mongoose.model('Posts', postsSchema);
export default Posts;
