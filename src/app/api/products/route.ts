import { prisma } from "@/utils/connects"
import { NextRequest, NextResponse } from "next/server"

//fetch all products
export const GET= async(req:NextRequest,res:NextResponse )=>{
    const {searchParams}= new URL(req.url)
    console.log("==========>seaech parma",searchParams)
     const cat = searchParams.get('cat')
     console.log("==========>cat",cat)
    try{
    const products= await prisma.product.findMany({
        where:{
            ...(cat ? {catSlug:cat}: {isFeatured:true})
        }
    })

    return new NextResponse(JSON.stringify(products),{status:200})
}
catch(error){
    console.log(error)
    return new NextResponse(JSON.stringify({message:"something went wrong!"}))
    }
}

export const POST = ()=>{
    return new NextResponse("hello",{status:200})
}