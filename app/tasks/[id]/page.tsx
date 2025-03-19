import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TaskForm } from "@/components/tasks/task-form"
import { notFound } from "next/navigation"

interface TaskPageProps {
  params: {
    id: string
  }
}

// Mock data for demonstration
const mockTasks = [
  {
    id: "1",
    title: "Update project documentation",
    description: "Review and update the project documentation with the latest changes",
    dueDate: new Date("2023-06-15"),
    priority: "HIGH" as const,
    category: "Work",
    tags: "documentation, urgent",
  },
  {
    id: "2",
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client meeting",
    dueDate: new Date("2023-06-18"),
    priority: "MEDIUM" as const,
    category: "Work",
    tags: "presentation, client",
  },
]

export default function TaskPage({ params }: TaskPageProps) {
  const task = mockTasks.find((t) => t.id === params.id)

  if (!task) {
    notFound()
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Task</h1>
          <p className="text-muted-foreground">Update your task details</p>
        </div>

        <TaskForm initialData={task} isEditing />
      </div>
    </DashboardLayout>
  )
}

