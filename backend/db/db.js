import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectdb =async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("Data Connection Unsuccessfull : ",error)
    }
}