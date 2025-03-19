import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TaskForm } from "@/components/tasks/task-form"

export default function NewTaskPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Task</h1>
          <p className="text-muted-foreground">Create a new task to add to your list</p>
        </div>

        <TaskForm />
      </div>
    </DashboardLayout>
  )
}

