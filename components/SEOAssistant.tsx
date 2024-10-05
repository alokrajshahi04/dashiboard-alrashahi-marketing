import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SEOAssistant() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">SEO Assistant</h2>
      <Card>
        <CardHeader>
          <CardTitle>Website Analysis</CardTitle>
          <CardDescription>Enter your website URL to get SEO recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="https://example.com" />
            <Button>Analyze</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Keyword Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Keyword suggestions will appear here after analysis.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>On-Page SEO Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <p>On-page SEO recommendations will appear here after analysis.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}