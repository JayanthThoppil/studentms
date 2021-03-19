const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlength:2,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("Name should only contain alphabets")
            }
        }
    },
    mname:{
        type:String,
        required:true,
        minlength:2,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("Name should only contain alphabets")
            }
        }
    },
    lname:{
        type:String,
        required:true,
        minlength:2,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("Name should only contain alphabets")
            }
        }
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id..")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
    },
    branch:{
        type:String,
        required:true,
        minlength:3
    },
    rollno:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

//create a collection

const User = mongoose.model("User",userSchema);

module.exports = User;