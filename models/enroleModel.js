import mongoose from "mongoose";

let enrolleSchema = new mongoose.Schema({
    courseID : {type : mongoose.Schema.Types.ObjectId , ref : 'Course'},
    studID : {type : mongoose.Schema.Types.ObjectId , ref : "User"} ,
    enrolledAt: { type: Date, default: Date.now }

})

let Enrollement = mongoose.Model("Enrollement" , enrolleSchema)

export default Enrollement ;
