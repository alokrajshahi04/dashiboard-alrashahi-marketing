import { Calendar } from "@/components/ui/calendar"

export default function ContentPlanner() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Content Planner</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Calendar />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Scheduled Posts</h3>
          <p>List of scheduled posts will appear here.</p>
        </div>
      </div>
    </div>
  )
}