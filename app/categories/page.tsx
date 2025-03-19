import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Edit, Plus, Trash2 } from "lucide-react"

// Mock data for demonstration
const mockCategories = [
  { id: "1", name: "Work", color: "bg-blue-500", taskCount: 5 },
  { id: "2", name: "Personal", color: "bg-green-500", taskCount: 3 },
  { id: "3", name: "Learning", color: "bg-purple-500", taskCount: 2 },
  { id: "4", name: "Health", color: "bg-red-500", taskCount: 2 },
]

export default function CategoriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
            <p className="text-muted-foreground">Manage your task categories</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Category
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Add Category</CardTitle>
            <CardDescription>Create a new category for your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input placeholder="Category name" className="flex-1" />
              <Button>Add Category</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-4 w-4 rounded-full ${category.color}`} />
                    <CardTitle>{category.name}</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">{category.taskCount} tasks</div>
                </div>
              </CardHeader>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-3.5 w-3.5" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive">
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

