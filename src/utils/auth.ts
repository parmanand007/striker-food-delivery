import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {NextAuthOptions,getServerSession} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "./connects";
export const authOptions:NextAuthOptions ={
    adapter:PrismaAdapter(prisma),
 providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_ID!,
        clientSecret:process.env.GOOGLE_SECRET!
    })
 ]
}


//serverside function
 
export const getAuthSession = ()=>getServerSession(authOptions)