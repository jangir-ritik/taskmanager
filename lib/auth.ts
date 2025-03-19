import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "ADMIN" | "USER"
}

export type Session = {
  user: User
  accessToken: string
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    return null
  }

  try {
    // In a real app, you would verify the token with your secret
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
    const { payload } = await jwtVerify(token, secret)

    return {
      user: payload.user as User,
      accessToken: token,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function logout() {
  "use server"
  const cookieStore = await cookies()
  cookieStore.delete("token")
  cookieStore.delete("refreshToken")
}

