import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1/blog');
        console.log('MongoDb connected');
    }
    catch(err){
        console.error(
            'MongoDB Connection Error :',err )
    }
};
connectDB()

export default connectDB;
