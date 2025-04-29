import Comments from '../models/commentModerl.js';
import Posts from '../models/postsModel.js';

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const info = req.body;
    console.log(info, 'my comment info')
    const newComment = new Comments(info);
    console.log(info.postInfo)
    let response = await newComment.save();
    console.log('my data store', response)
    let myPost = await Posts.findByIdAndUpdate(
      info?.postInfo,
      {
        $push: { comments: newComment._id },
      },
      { new: true }
    );
    console.log('my comment in post = ', myPost)
    res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      data: newComment,
    });
  } catch (error) {
    console.error('Error creating comment:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create comment',
    });
  }
};
