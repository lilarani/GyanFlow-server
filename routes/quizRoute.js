
import express from 'express';
import {
    createQuize,
    deleteQuiz,
    getAllQuiz,
    getSingleQuiz,
    updateQuiz,
    getAllQuizForSpeceficModule
} from '../controllers/quizConroller.js';
let router = express.Router();



router.post("/addquiz/:instructorId/:moduleId", createQuize);
router.get("/quizzes", getAllQuiz);
router.get("/getquizforModule/:moduleId", getAllQuizForSpeceficModule );

router.get("/quizzes/:id", getSingleQuiz);
router.put("/quizzes/:id", updateQuiz);
router.delete("/quizzes/:id", deleteQuiz);
export default router;