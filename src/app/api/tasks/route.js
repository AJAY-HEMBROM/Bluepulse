import { connectDb } from "@/helper/db";
import { Task, tasks } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request){
    try {
        const Tasks=await tasks.find();
        return NextResponse.json(Tasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get tasks",
            status:false,
        });
        
    }
    
}






export async function POST(request){

    const { title, content, userId } = await request.json();
    
    try {
        const task = new tasks({
            title,
            content,
            userId,
        });

        const createdTask = await task.save();
        
        return NextResponse.json(createdTask, {
            status: 201,
        });
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            message: "Failed to create task",
            success: false,
        });
        
    }
}
