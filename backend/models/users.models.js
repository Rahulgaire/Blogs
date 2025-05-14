import mongoose from "mongoose"
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const users_dummy= mongoose.model("users_dummy",UserSchema)
export default users_dummy