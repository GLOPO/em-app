'use client'

import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const {username, email, password, confirm_password} = await res.json();

    const hashedPassword = await bcrypt.hash(password, 10)
    const hashedConfirmPassword = await bcrypt.hash(confirm_password, 10)
    await connectMongoDB ();
    await User.create({username, email, hashedPassword, hashedConfirmPassword})

    return NextResponse.json({message: 'User registered.'}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: 'An error occured while registering the uer'}, {status: 500})
  }
}