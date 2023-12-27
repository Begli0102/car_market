import { mongoDB } from '@/app/lib/mongodb'
import User from '@/app/models/user'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const { name, email, password } = body
    const hashedPassword = bcrypt.hash(password, 10)
    await mongoDB()
    await User.create({ name, email, password: hashedPassword })

    return NextResponse.json({ message: 'User registered' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while signing up' },
      { status: 501 }
    )
  }
}
