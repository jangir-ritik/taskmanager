"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, ListTodo, Plus, Settings, Tag } from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/tasks",
      label: "Tasks",
      icon: ListTodo,
    },
    {
      href: "/tasks/new",
      label: "New Task",
      icon: Plus,
    },
    {
      href: "/categories",
      label: "Categories",
      icon: Tag,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <aside className={cn("flex flex-col gap-6 p-4", className)}>
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <Button
            key={link.href}
            variant={pathname === link.href ? "secondary" : "ghost"}
            className={cn("justify-start", pathname === link.href && "bg-secondary")}
            asChild
          >
            <Link href={link.href}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  )
}

