import React, { useState } from "react"
import { cn } from "../../lib/utils"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-css"
import "prismjs/components/prism-scss"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-bash"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

interface CodeBlockProps {
  children: string
  className?: string
  language?: string
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<string[]>([])

  // Extract language from className if not provided directly
  const match = /language-(\w+)/.exec(className || "")
  const lang = language || (match && match[1]) || "javascript"

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRunCode = () => {
    if (lang !== "javascript") return

    setIsRunning(true)
    setOutput([])

    // Capture console.log output
    const originalConsoleLog = console.log
    const logs: string[] = []

    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '))
    }

    try {
      // Create a safe environment for evaluation
      const code = children.replace(/console\.log/g, "console.log")
      
      // Execute the code
      // eslint-disable-next-line no-new-func
      new Function(code)()
      
      // Display the output
      setOutput(logs)
    } catch (error: any) {
      setOutput([`Error: ${error.message}`])
    } finally {
      console.log = originalConsoleLog
      setIsRunning(false)
    }
  }

  // Highlight the code
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [children, lang])

  return (
    <div className="relative mb-6">
      <div className="rounded-lg overflow-hidden border border-border">
        <div className="flex justify-between items-center px-4 py-2 bg-secondary border-b border-border">
          <div className="text-xs font-medium uppercase">{lang}</div>
          <div className="flex gap-2">
            <button 
              onClick={handleCopy} 
              className={cn(
                "px-2 py-1 rounded text-xs cursor-pointer flex items-center gap-1",
                copied ? "bg-green-500 text-white" : "bg-secondary-foreground/10 text-secondary-foreground"
              )}
              aria-label="Copy code"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            {lang === "javascript" && (
              <button 
                onClick={handleRunCode} 
                className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs cursor-pointer flex items-center gap-1"
                disabled={isRunning}
                aria-label="Run code"
              >
                {isRunning ? "Running..." : "Run it!"}
              </button>
            )}
          </div>
        </div>
        <pre className={cn(
          "p-4 m-0 overflow-auto text-sm leading-7 bg-muted",
          `language-${lang}`,
          "line-numbers",
          lang === "javascript" && output.length === 0 ? "rounded-b-lg" : "rounded-none"
        )}>
          <code className={`language-${lang}`}>
            {children.trim()}
          </code>
        </pre>
        {output.length > 0 && (
          <div className="p-4 bg-muted border-t border-border rounded-b-lg">
            <div className="pb-2 mb-2 border-b border-border text-destructive font-bold">Output:</div>
            {output.map((line, i) => (
              <div key={i} className="my-1">
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}