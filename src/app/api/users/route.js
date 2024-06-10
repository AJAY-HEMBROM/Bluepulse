
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request) //get request function
{
    let users=[];
    try {
        users=await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get users",
            success:false,
        });
        
    }

    return NextResponse.json(users);

}

//creating user
export async function POST(request)
{
    
    //fetch user details from request
    const {name,email,password,about,profileURL}= await request.json();
    

    //create user object with user model
    const user= new User({
        name,
        email,
        password,
        about,
        profileURL,
    });
    
    try {
        //save the object to database
        const createdUser=await user.save();
        const response = NextResponse.json(user, {
            status: 201,
            
        });
        console.log("user created");
        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create user!!",
            status:false,
        });
        
    }
}
