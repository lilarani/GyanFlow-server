import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true} ,
    phone : {type : String , required : true} , 
    password : {type : String , required : true},
    role : {type : String , required : true, default : 'student'},
    picture : {type : String ,required : true, default : ""},
    bio : {type : String , required : true, default : ""}
},{timestamps : true})

const User = mongoose.model("User" , userSchema);
export default User ;


