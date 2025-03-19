import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { SignJWT } from "jose"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, you would validate the credentials against a database
    // For demo purposes, we'll just create a mock token

    const { email, password } = body

    // Mock validation
    if (email !== "john.doe@example.com" || password !== "password") {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    // Create a JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

    const token = await new SignJWT({
      user: {
        id: "1",
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe",
        role: "USER",
      },
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secret)

    // Set the token as a cookie
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

