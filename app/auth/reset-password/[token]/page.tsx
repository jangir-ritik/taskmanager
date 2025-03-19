import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

interface ResetPasswordPageProps {
  params: {
    token: string
  }
}

export default async function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const session = await getSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">TaskManager</h1>
          <p className="text-muted-foreground">Create a new password</p>
        </div>
        <ResetPasswordForm token={params.token} />
      </div>
    </div>
  )
}

