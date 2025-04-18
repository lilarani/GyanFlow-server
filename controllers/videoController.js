import UploadModul from '../models/uploadModul.js';
import Video from './../models/videoModel.js'; // ✅ Model নাম Capitalized

let addVideo = async (req, res) => {
  try {
    let videoInfo = req.body;
    let newVideo = new Video({
      ...videoInfo,
    });
    await newVideo.save();

    let myModel = await UploadModul.findByIdAndUpdate(
      videoInfo?.modelId,
      {
        $push: { videos: newVideo._id },
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: 'Video uploaded successfully!',
      data: newVideo,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error.message,
    });
  }
};

export { addVideo };
