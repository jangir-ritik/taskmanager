import type { ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { LogOut, Menu, X } from "lucide-react"
import { getSession, logout } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/layout/sidebar"
import { UserNav } from "@/components/layout/user-nav"

interface DashboardLayoutProps {
  children: ReactNode
}

export async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex items-center justify-between">
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <span className="font-bold">TaskManager</span>
                  </Link>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                  </Sheet>
                </div>
                <Sidebar className="mt-6" />
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="hidden items-center gap-2 md:flex">
              <span className="font-bold">TaskManager</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <UserNav user={session.user} />
            <form action={logout}>
              <Button variant="ghost" size="icon" type="submit">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            </form>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <Sidebar className="hidden w-64 border-r md:block" />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}

