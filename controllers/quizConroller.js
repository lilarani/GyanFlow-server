import { errorResponse, successResponse, validationError } from "../middlewares/responseMessage.js";
import Quiz from "../models/QuizModel.js";
import User from "../models/userModel.js";



 const createQuize= async(req,res)=>{
    try{
        const userAccess = await User.findById(req.params.instructorId)
        if (userAccess.role !=="instructor"){
           return  validationError(res, 400,"Only instructor can add quiz",)
        }    
        const newQuiz= new Quiz({
            moduleId: req.params.moduleId,
            instructorId: req.params.instructorId,
            ...req.body
        });

        const quiz= await newQuiz.save();
       return successResponse(res, 201,"quiz create successfull", quiz)

    }catch(err){
        console.log(err)
      return  errorResponse(res,500, "internal server Error", err);
      
    }
};


 const getAllQuiz = async(req, res)=>{
    try{
        const quiz = await Quiz.find({}).sort({createdAt:-1});
        return successResponse(res, 201, "Quiz list retrived succesfully", quiz);
    }catch(err){
        return errorResponse(res, 500, "error while fethic quiz list", err);
    }
}

//get quiz for specefic moduleId
const getAllQuizForSpeceficModule = async (req, res) => {
    const moduleId= req.params.moduleId;
    try {
        const quiz = await Quiz.find({moduleId}).sort({ createdAt: -1 });
        return successResponse(res, 201, "Quiz  list retrived succesfully", quiz);
    } catch (err) {
        return errorResponse(res, 500, "error while fethic quiz list", err);
    }
}


// get single quiz 
 const getSingleQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
         return validationError(res, 404,"Quiz not found")
          
        }      
        return successResponse(res, 200, "Quiz retrieved successfully", quiz);
    } catch (err) {
        return errorResponse(res, 500, "Error while fetching quiz", err);
    }
};


//  Update a quiz by ID
 const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) {
           return validationError(res, 404,"Quiz not found to update");
        }
      return successResponse(res, 200, "Quiz updated successfully",quiz )
    
    } catch (err) {
        return errorResponse(res, 500, "Error while updating quiz", err);
    }
};


//  Delete a quiz by ID
 const deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) {
            return validationError(res, 404, "Quiz not found to delete");
        }
        res.status(200).json({
            success: true,
            message: "Quiz deleted successfully",
        });
    } catch (err) {
        return errorResponse(res, 500, "Error while deleting quiz", err);
    }
};


export { createQuize, deleteQuiz, getAllQuiz, getAllQuizForSpeceficModule, getSingleQuiz, updateQuiz }