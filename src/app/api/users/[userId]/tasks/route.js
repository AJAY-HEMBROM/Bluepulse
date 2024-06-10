import { getResponseMessage } from "@/helper/responseMessage";
import { tasks } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params})
{
    const{userId}=params;
    console.log("userId",userId);
    try {
        const Tasks=await tasks.find({userId:userId,});
                //schema property:const userid
        console.log(Tasks);        
        return NextResponse.json(Tasks);        

    } catch (error) {
        console.log(error);
        return getResponseMessage("failed to get task",404,false);
        
    }
}