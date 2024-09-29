'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Grid } from "lucide-react"

export function CategoryBoard() {
  const categories = [
    { name: "Frontend", icon: "🌐" },
    { name: "Backend", icon: "🖥️" },
    { name: "Mobile", icon: "📱" },
    { name: "DevOps", icon: "🔧" },
    { name: "Machine Learning", icon: "🧠" },
    { name: "Data Science", icon: "📊" },
    { name: "Security", icon: "🔒" },
    { name: "Blockchain", icon: "🔗" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">GitHub Stars Organizer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              <div className="text-2xl">{category.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Grid className="h-4 w-4" />
                <span>0 repositories</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}