import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Support() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Support</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Live Chat Support</CardTitle>
            <CardDescription>Get help from our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Available for higher-tier users</p>
            <Button>Start Chat</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQs & Guides</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>How to schedule posts</li>
              <li>Using the Content Creator</li>
              <li>Understanding SEO metrics</li>
              <li>Integrating social media accounts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}