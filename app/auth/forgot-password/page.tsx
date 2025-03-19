import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ForgotPasswordPage() {
  const session = await getSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">TaskManager</h1>
          <p className="text-muted-foreground">Reset your password</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

