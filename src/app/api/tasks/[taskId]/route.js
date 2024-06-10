
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { tasks } from "@/models/task";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request, {params}) {
    // console.log("Request:", request);
    // console.log("Params:", params);
    const {taskId } = params;
    console.log("taskId:", taskId); // Log taskId

    try {
        const task = await tasks.findById(taskId);
        console.log("Found task:", task); // Log task
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to get the user",
            success: false,
        });
    }
}



export async function PUT(request,{params}) 
{
    try {
        const {taskId}=params;
        const{title,content,status}=await request.json();
        let task= await tasks.findById(taskId);
        (task.title=title),
        (task.content=content),
        (task.status=status);
        const updatedTask=await task.save();
        return NextResponse.json(updatedTask);



    } catch (error) {
        console.log(error);
        return getResponseMessage("error in updating",500,false);
        
    }

}


export async function DELETE(request,{params}) {
    try {
        const {taskId}=params;
        await tasks.deleteOne({ _id:taskId,});
        return getResponseMessage("task deleted!!",200,true);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in deleting task!",500,false);
        
    }

}
