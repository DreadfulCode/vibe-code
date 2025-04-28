# shadcn/ui Implementation Plan

This document outlines our incremental approach to implementing shadcn/ui components, focusing first on typography and code blocks without disrupting existing layouts.

## Phase 1: Setup and Configuration

### 1.1 Install Minimal Dependencies

```bash
# Install only the essential dependencies needed for typography and code blocks
npm install class-variance-authority clsx tailwind-merge
npm install next-themes
npm install -D tailwindcss-animate
```

### 1.2 Create Utils File

Create `src/lib/utils.ts` for the utility functions needed by shadcn/ui components:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 1.3 Update Tailwind Configuration

Update `tailwind.config.js` to include the necessary configuration for typography and code blocks, without changing the existing configuration:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep existing colors
        primary: "#1E88E5",
        secondary: "#64B5F6",
        accent: "#0D47A1",
        background: "#FFFFFF",
        text: "#212121",
        
        // Add shadcn/ui color variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        heading: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary))',
              },
            },
            code: {
              color: 'hsl(var(--primary))',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            h1: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h4: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h5: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h6: {
              fontFamily: 'Work Sans, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
```

### 1.4 Update Global CSS

Update `src/styles/global.css` to add the necessary CSS variables for shadcn/ui, while preserving existing styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 40% 98%;
    --foreground: 222 47% 11%;
    
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    
    --primary: 196 80% 49%;
    --primary-foreground: 210 40% 98%;
    
    --secondary: 210 40% 96%;
    --secondary-foreground: 222 47% 11%;
    
    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;
    
    --accent: 196 80% 49%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 196 80% 49%;
    
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    
    --card: 222 47% 11%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222 47% 11%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 196 80% 49%;
    --primary-foreground: 222 47% 11%;
    
    --secondary: 217 32% 17%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217 32% 17%;
    --muted-foreground: 215 20% 65%;
    
    --accent: 217 32% 17%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 62% 30%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 217 32% 17%;
    --input: 217 32% 17%;
    --ring: 196 80% 49%;
  }
}

/* Keep existing styles */
```

## Phase 2: Typography Improvements

### 2.1 Create Typography Component

Create `src/components/ui/typography.tsx` to define consistent typography components:

```typescript
import React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ children, className }: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  )
}

export function TypographyInlineCode({ children, className }: TypographyProps) {
  return (
    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
      {children}
    </code>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>
      {children}
    </div>
  )
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}
```

### 2.2 Create Typography Test Component

Create `src/components/TypographyTest.tsx` to test typography components:

```typescript
import React from "react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from "./ui/typography"

const TypographyTest: React.FC = () => {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <TypographyH1>Typography Test Page</TypographyH1>
        <TypographyLead>
          This page demonstrates the typography components from shadcn/ui.
        </TypographyLead>
      </div>

      <div>
        <TypographyH2>Headings</TypographyH2>
        <TypographyH1>Heading 1</TypographyH1>
        <TypographyH2>Heading 2</TypographyH2>
        <TypographyH3>Heading 3</TypographyH3>
        <TypographyH4>Heading 4</TypographyH4>
      </div>

      <div>
        <TypographyH2>Paragraphs</TypographyH2>
        <TypographyP>
          This is a paragraph of text. Typography is the art and technique of
          arranging type to make written language legible, readable, and
          appealing when displayed.
        </TypographyP>
        <TypographyP>
          The arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </TypographyP>
      </div>

      <div>
        <TypographyH2>Blockquote</TypographyH2>
        <TypographyBlockquote>
          "Typography is the craft of endowing human language with a durable
          visual form." — Robert Bringhurst
        </TypographyBlockquote>
      </div>

      <div>
        <TypographyH2>Lists</TypographyH2>
        <TypographyList>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item with <TypographyInlineCode>inline code</TypographyInlineCode></li>
        </TypographyList>
      </div>

      <div>
        <TypographyH2>Inline Code</TypographyH2>
        <TypographyP>
          Here is some <TypographyInlineCode>inline code</TypographyInlineCode> within a paragraph.
        </TypographyP>
      </div>

      <div>
        <TypographyH2>Text Sizes</TypographyH2>
        <TypographyLarge>Large Text</TypographyLarge>
        <TypographyP>Normal Text</TypographyP>
        <TypographySmall>Small Text</TypographySmall>
        <TypographyMuted>Muted Text</TypographyMuted>
      </div>
    </div>
  )
}

export default TypographyTest
```

### 2.3 Create Typography Test Page

Create `src/pages/typography-test.tsx`:

```typescript
import React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/Layout"
import TypographyTest from "../components/TypographyTest"

const TypographyTestPage: React.FC = () => {
  return (
    <Layout title="Typography Test">
      <TypographyTest />
    </Layout>
  )
}

export default TypographyTestPage

export const Head: HeadFC = () => <title>Typography Test | Vibe Coding With Fred</title>
```

## Phase 3: Code Block Improvements

### 3.1 Create Code Block Component

Create `src/components/ui/code-block.tsx`:

```typescript
import React, { useState } from "react"
import { cn } from "@/lib/utils"
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
      <div className="rounded-lg overflow-hidden">
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
```

### 3.2 Create Code Block Test Component

Create `src/components/CodeBlockTest.tsx`:

```typescript
import React from "react"
import { CodeBlock } from "./ui/code-block"

const CodeBlockTest: React.FC = () => {
  const jsCode = `// Example JavaScript code with the "Run it!" feature
function greet(name) {
  return \`Hello, \${name}! Welcome to Vibe Coding With Fred.\`;
}

// Try running this code!
console.log(greet("Developer"));
console.log("The current date is: " + new Date().toLocaleDateString());
`;

  const tsCode = `// TypeScript example
interface User {
  name: string;
  age: number;
}

function formatUser(user: User): string {
  return \`\${user.name} is \${user.age} years old\`;
}

const user: User = {
  name: "Fred",
  age: 28
};

// This would be logged if we could run TS directly
// console.log(formatUser(user));
`;

  const cssCode = `.code-block {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: var(--radius);
  border-width: 1px;
  border-color: hsl(var(--border));
  background-color: hsl(var(--secondary) / .5);
}

.code-block pre {
  overflow-x: auto;
  padding: 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
}`;

  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <h1 className="text-4xl font-bold mb-4">Code Block Test</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page demonstrates the improved code block component.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">JavaScript Example</h2>
        <p className="mb-4">
          This example shows a JavaScript code block with the "Run it!" feature.
        </p>
        <CodeBlock language="javascript">{jsCode}</CodeBlock>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">TypeScript Example</h2>
        <p className="mb-4">
          This example shows a TypeScript code block.
        </p>
        <CodeBlock language="typescript">{tsCode}</CodeBlock>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">CSS Example</h2>
        <p className="mb-4">
          This example shows a CSS code block.
        </p>
        <CodeBlock language="css">{cssCode}</CodeBlock>
      </div>
    </div>
  )
}

export default CodeBlockTest
```

### 3.3 Create Code Block Test Page

Create `src/pages/code-block-test.tsx`:

```typescript
import React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/Layout"
import CodeBlockTest from "../components/CodeBlockTest"

const CodeBlockTestPage: React.FC = () => {
  return (
    <Layout title="Code Block Test">
      <CodeBlockTest />
    </Layout>
  )
}

export default CodeBlockTestPage

export const Head: HeadFC = () => <title>Code Block Test | Vibe Coding With Fred</title>
```

## Phase 4: Testing and Integration

### 4.1 Create Test Plan

1. Visual Testing:
   - Create test pages for typography and code blocks
   - Verify that styles are applied correctly
   - Check for any layout issues
   - Test in both light and dark modes (if implemented)

2. Functional Testing:
   - Test code block functionality (copy, run JavaScript)
   - Verify that typography components render correctly
   - Check for any console errors

3. Integration Testing:
   - Gradually replace inline styles with Tailwind classes
   - Test each component after modification
   - Ensure layouts don't break

### 4.2 Integration Strategy

1. Start with isolated test pages to verify components work correctly
2. Create a parallel implementation of components
3. Once verified, gradually replace inline styles with Tailwind classes
4. Test each change thoroughly before moving to the next component

## Phase 5: Incremental Rollout

### 5.1 Typography Integration

1. Update MDXProvider to use typography components
2. Apply typography styles to blog posts
3. Test with various content types

### 5.2 Code Block Integration

1. Update CodeBlock component to use the new shadcn/ui-based version
2. Test with various code examples
3. Verify that all functionality works correctly

### 5.3 Final Testing

1. Comprehensive testing across all pages
2. Browser compatibility testing
3. Performance testing
4. Accessibility testing

## Conclusion

This incremental approach allows us to improve typography and code blocks without disrupting existing layouts. By focusing on these specific areas first and implementing changes gradually with thorough testing, we can ensure a smooth transition to shadcn/ui components.