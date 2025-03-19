import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TaskList } from "@/components/tasks/task-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

// Mock data for demonstration
const mockTasks = [
  {
    id: "1",
    title: "Update project documentation",
    description: "Review and update the project documentation with the latest changes",
    dueDate: "2023-06-15",
    priority: "HIGH" as const,
    category: "Work",
    tags: ["documentation", "urgent"],
    completed: false,
  },
  {
    id: "2",
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client meeting",
    dueDate: "2023-06-18",
    priority: "MEDIUM" as const,
    category: "Work",
    tags: ["presentation", "client"],
    completed: false,
  },
  {
    id: "3",
    title: "Review code changes",
    description: "Review pull requests and provide feedback",
    dueDate: "2023-06-20",
    priority: "LOW" as const,
    category: "Work",
    tags: ["code", "review"],
    completed: true,
  },
  {
    id: "4",
    title: "Gym session",
    description: "Workout at the gym",
    dueDate: "2023-06-14",
    priority: "MEDIUM" as const,
    category: "Health",
    tags: ["exercise", "personal"],
    completed: false,
  },
  {
    id: "5",
    title: "Read book chapter",
    description: "Read chapter 5 of 'Clean Code'",
    dueDate: "2023-06-19",
    priority: "LOW" as const,
    category: "Learning",
    tags: ["reading", "development"],
    completed: false,
  },
  {
    id: "6",
    title: "Grocery shopping",
    description: "Buy groceries for the week",
    dueDate: "2023-06-13",
    priority: "HIGH" as const,
    category: "Personal",
    tags: ["shopping", "errands"],
    completed: true,
  },
]

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
            <p className="text-muted-foreground">Manage and organize your tasks</p>
          </div>
          <Button asChild>
            <Link href="/tasks/new">
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Link>
          </Button>
        </div>

        <TaskList initialTasks={mockTasks} />
      </div>
    </DashboardLayout>
  )
}

