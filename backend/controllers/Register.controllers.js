import User from "../models/User.models.js";

export const createUser = async(req,res)=>{
    const {name,email,password}=req.body
    console.log(req.body)
    try{
        let userCreated= await User.findOne({email});
        if(userCreated){
            return res.status(404).json({
                msg:"User Already Exist",
                userCreated
            })
        }   
        let newUser=new User({ name, email, password })
        await newUser.save()
        res.status(201).json({
            msg:"User Created Successfully",
             newUser
        }
        )
    } catch (error) {
        res.status(500).json({
            msg:"Error ",
            error: error.message
        })
    }
}
export const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                msg:"Invalid Field Data",
                user
            })
        }
        let match= user.password==password
        if (!match) {
         return res.status(400).json({message:"invailed credentials",match})
            
        }

        res.status(201).json({message:"login sucessfully",user})
       
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error:error.message
        })
    }
}