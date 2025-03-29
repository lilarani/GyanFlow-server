import UploadModul from './../models/uploadModul.js';
import mongoose from 'mongoose';
const addModul = async (req, res) => {
    try {
        let moduleInfo = req.body;
        let newModule = new UploadModul({
            ...moduleInfo
        });
        await newModule.save();
        res.status(200).send({
            success: true,
            message: 'Module created successfully!',
            data: newModule
        });
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        });
    }
};

let allModules = async (req, res) => {
    let courseId = req.params.id ;
    console.log(courseId)
    try {
        let result = await UploadModul.find({courseId}).populate("videos");
        res.status(200).send({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(404).send({
            success: false,
            message: e.message
        })
    }
}

let allVideos = async (req, res) => {
    try {
        let modulId = req.params.id;
        console.log("Fetching modules for course:", modulId);

        if (!mongoose.Types.ObjectId.isValid(modulId)) {
            return res.status(400).send({
                success: false,
                message: "Invalid course ID!"
            });
        }

        let videos = await UploadModul.find({ _id: new mongoose.Types.ObjectId(modulId) }).populate("videos");

        res.status(200).send({
            success: true,
            message: "Modules fetched successfully!",
            videos: videos
        });
    } catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        });
    }
};



export { addModul, allVideos , allModules };
