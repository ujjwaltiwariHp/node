import mongoose from "mongoose";
const user= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
        unique:true,
    }


}
);
module.exports=mongoose.model("user",user);