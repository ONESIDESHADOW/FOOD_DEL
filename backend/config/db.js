import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://greatstack:070707@cluster0.3lddh.mongodb.net/food-del').then(()=>console.log("DB Connnected"));
    
}