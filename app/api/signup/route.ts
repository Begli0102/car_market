import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const { name, email, password } = body

    return NextResponse.json({ message: 'User registered' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while signing up' },
      { status: 501 }
    )
  }
}
