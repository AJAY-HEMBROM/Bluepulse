import { User } from "@/models/user";
import { NextResponse } from "next/server";

//getting the user 
export async function GET(resquest,{params})
{
    const {userId}=params;
    try {
        const user=await User.findById(userId).select("-password");
        return NextResponse.json(user,{
            message:"user found!!",
            success:true,
        });
    } catch (error) {
        return NextResponse({
            message:"failed to get user!!",
            success:false,
        });
        
    }
}







//deleting the user 
export async function DELETE(resquest,{params})
{
    const {userId}=params;
    try {
        await User.deleteOne({
            _id:userId,

        });
        
        return NextResponse.json({
            message:"user deleted!!",
            success:true,
        });

    } catch (error) {
        
        return NextResponse.json({
            message:"error in deleting user!!",
            success:false,
        });
    }

    return NextResponse.json({
        message:"testing delete",
    })
}



//update user
export async function PUT(request,{params})
{
    const {userId}=params;
    const {name,passord,about,profileURL}=await request.json();
    try {
        const user=await User.findById(userId);
        user.name=name;
        user.about=about;
        user.passord=passord;
        user.profileURL=profileURL;
        //you can add more information 
        const updatedUser=await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({
            message:"failed to update user!!",
            success:false,
        });
    }



}