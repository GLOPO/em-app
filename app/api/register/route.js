import { NextResponse } from "next/server";
import { connectMongoDB } from '@/library/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs';

// this code is collecting data from signup or register form 
export async function POST(request) {
  try {
    const {email, username, password, confirm_password} =await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConfirmPassword = await bcrypt.hash(confirm_password, 10);
    await connectMongoDB();
    await User.create({email, username, password: hashedPassword, confirm_password: hashedConfirmPassword})


    return NextResponse.json({message: 'User Registered'}, {status: 201})

  } catch(error) {
    return NextResponse.json({message: 'An error occured during registeration'}, {status: 500})

  }
}