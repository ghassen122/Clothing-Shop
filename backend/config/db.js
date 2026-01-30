import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ghassen1harbaoui1_db_user:ZmocKykgJQBelo6r@cluster2.i7nfyx6.mongodb.net/Clothing-Shop').then(()=>console.log("DB Connected"));
   
}