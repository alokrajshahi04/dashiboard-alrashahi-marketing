import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContentCreator() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Content Creator</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Social Media Post</CardTitle>
            <CardDescription>Create a new social media post</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Choose from various templates for different social media platforms.</p>
          </CardContent>
          <CardFooter>
            <Button>Create Post</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Article</CardTitle>
            <CardDescription>Write a new blog article</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Start with a template or from scratch to create engaging blog content.</p>
          </CardContent>
          <CardFooter>
            <Button>Start Writing</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Email Newsletter</CardTitle>
            <CardDescription>Design an email newsletter</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create eye-catching email newsletters to engage your audience.</p>
          </CardContent>
          <CardFooter>
            <Button>Design Newsletter</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}