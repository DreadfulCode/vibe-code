import React from "react"
import { ThemeProvider } from "./ThemeProvider"
import Layout from "./Layout"
import ThemeToggle from "./ThemeToggle"

interface RootLayoutProps {
  children: React.ReactNode
  title?: string
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, title }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Layout title={title}>
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default RootLayout