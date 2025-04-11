import mongoose from "mongoose";


const videoAdd = mongoose.Schema({
    videoTitle : {type : String },
    modelId : {type : mongoose.Schema.Types.ObjectId , ref:'Modul'},
    url: { type: String },
    duration: { type: Number },
    uploadedAt: { type: Date, default: Date.now } 
})

const video = mongoose.model('Video' , videoAdd)

export default video ;

