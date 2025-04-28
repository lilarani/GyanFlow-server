import Comments from '../models/commentModerl.js';

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const { text, postId, userId } = req.body;

    const newComment = new Comments({
      text,
      postId,
      userId,
      createdAt: new Date(),
    });

    await newComment.save();

    res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      data: newComment,
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create comment',
    });
  }
};
