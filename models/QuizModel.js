import mongoose from "mongoose";

// hey_dear@gmail.com
// Abu@1234

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [
        {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, default: false }
        }
    ],
    marks: { type: Number, default: 1 }
});


const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    moduleId:{
        type: String, required: true
    },
    description: { 
        type: String,
        required:true,
        
    },
    instructorId:{
        type: String, required: true
    },
    courseID: {
        type: String,
         ref: "Course",
         required:true
        
     }, 
    questions: [questionSchema],   
    durationInMinutes: {
         type: Number,
         default: 30
        
     },
    
},{timestamps:true});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;