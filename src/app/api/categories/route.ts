import { prisma } from "@/utils/connects"
import { NextResponse } from "next/server"


//fetch all categories
export const GET= async()=>{
    try{
    const categories= await prisma.category.findMany()

    return new NextResponse(JSON.stringify(categories),{status:200})
}
catch(error){
    console.log(error)
    return new NextResponse(JSON.stringify({message:"something went wrong!"}))
    }
}

export const POST = ()=>{
    return new NextResponse("hello",{status:200})
}