import React from "react"
import { HeadFC } from "gatsby"
import RootLayout from "../components/RootLayout"
import TypographyTest from "../components/TypographyTest"
import CodeBlockTest from "../components/CodeBlockTest"

const ShadcnTestPage: React.FC = () => {
  return (
    <RootLayout title="shadcn/ui Test">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">shadcn/ui Component Tests</h1>
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Typography Components</h2>
          <div className="p-6 bg-card rounded-lg border border-border">
            <TypographyTest />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Code Block Components</h2>
          <div className="p-6 bg-card rounded-lg border border-border">
            <CodeBlockTest />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default ShadcnTestPage

export const Head: HeadFC = () => <title>shadcn/ui Test | Vibe Coding With Fred</title>