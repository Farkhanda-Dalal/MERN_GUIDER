import mongoose from "mongoose";

export const connect=async () =>{
    try {
        //create .env and add MONGO_URL in it 
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error occured while connecting to MongoDB : ${error}`)
        
    }
}
