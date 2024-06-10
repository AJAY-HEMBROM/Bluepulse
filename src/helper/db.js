import mongoose from "mongoose";
import {User} from "../models/user"
export const connectDb= async ()=>
{
 
 
    try {
      const {connection}= await mongoose.connect(process.env.URLDB,{
        dbName:"work_manager",
      });

      console.log("db connected...");
      // console.log(connection);

     //testing and creating new user
    //  const uuser=new User({
    //   name:"testing name",
    //   email:"testing@gmail.com",
    //   password:"testpassword",
    //   about:"this is testing",
    //  });

    //  await uuser.save();
    //  console.log("user is created");

    } 
    catch (error) {
        console.log("failed to connect db");
        console.log(error);
        
    }
};