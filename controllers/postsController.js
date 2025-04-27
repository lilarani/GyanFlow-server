import Posts from '../models/postsModel.js';

// post apis
const addPost = async (req, res) => {
  try {
    const post = req.body;
    const result = await Posts.create(post);
    res.status(201).send({ success: true, data: result });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

// get apis
const allPosts = async (req, res) => {
  try {
    const posts = await Posts.find({}).populate('userId');
    res.status(201).send({ success: true, data: posts });
  } catch (err) {
    res.status(404).send({ success: false, message: err.message });
  }
};
export { addPost, allPosts };
