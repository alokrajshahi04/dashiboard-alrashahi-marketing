import { Home, Calendar, PenTool, Search, BarChart2, HelpCircle, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'Home', icon: Home, id: 'home' },
  { name: 'Content Planner', icon: Calendar, id: 'content-planner' },
  { name: 'Content Creator', icon: PenTool, id: 'content-creator' },
  { name: 'SEO Assistant', icon: Search, id: 'seo-assistant' },
  { name: 'Insights', icon: BarChart2, id: 'insights' },
  { name: 'Support', icon: HelpCircle, id: 'support' },
  { name: 'Settings', icon: Settings, id: 'settings' },
]

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-semibold text-primary">MarketMate</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  activeSection === item.id && "bg-muted"
                )}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}