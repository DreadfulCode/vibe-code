import React, { useState } from "react"
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

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, language }) => {
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

  const styles = {
    codeBlockContainer: {
      position: 'relative' as 'relative',
      marginBottom: '1.5rem',
    },
    codeBlock: {
      borderRadius: '0.375rem',
      overflow: 'hidden',
      marginTop: '0.5rem',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      borderTopLeftRadius: '0.375rem',
      borderTopRightRadius: '0.375rem',
    },
    language: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase' as 'uppercase',
    },
    buttons: {
      display: 'flex',
      gap: '0.5rem',
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
    },
    copyButton: {
      backgroundColor: copied ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
    },
    runButton: {
      backgroundColor: '#1EAEDB',
    },
    pre: {
      margin: 0,
      padding: '1rem',
      overflow: 'auto',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      backgroundColor: '#282c34',
      color: '#abb2bf',
      borderBottomLeftRadius: lang === "javascript" && output.length === 0 ? '0.375rem' : '0',
      borderBottomRightRadius: lang === "javascript" && output.length === 0 ? '0.375rem' : '0',
    },
    code: {
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
      fontSize: '0.875rem',
    },
    output: {
      backgroundColor: '#282c34',
      color: '#abb2bf',
      padding: '1rem',
      borderBottomLeftRadius: '0.375rem',
      borderBottomRightRadius: '0.375rem',
      borderTop: '1px dashed rgba(255, 255, 255, 0.2)',
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap' as 'pre-wrap',
    },
    outputHeader: {
      borderBottom: '1px dashed rgba(255, 255, 255, 0.2)',
      paddingBottom: '0.5rem',
      marginBottom: '0.5rem',
      color: '#e06c75',
      fontWeight: 'bold',
    },
    outputLine: {
      margin: '0.25rem 0',
    },
  };

  return (
    <div style={styles.codeBlockContainer}>
      <div style={styles.codeBlock}>
        <div style={styles.toolbar}>
          <div style={styles.language}>{lang}</div>
          <div style={styles.buttons}>
            <button 
              onClick={handleCopy} 
              style={{...styles.button, ...styles.copyButton}}
              aria-label="Copy code"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            {lang === "javascript" && (
              <button 
                onClick={handleRunCode} 
                style={{...styles.button, ...styles.runButton}}
                disabled={isRunning}
                aria-label="Run code"
              >
                {isRunning ? "Running..." : "Run it!"}
              </button>
            )}
          </div>
        </div>
        <pre style={styles.pre} className={`language-${lang} line-numbers`}>
          <code style={styles.code} className={`language-${lang}`}>
            {children.trim()}
          </code>
        </pre>
        {output.length > 0 && (
          <div style={styles.output}>
            <div style={styles.outputHeader}>Output:</div>
            {output.map((line, i) => (
              <div key={i} style={styles.outputLine}>
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeBlock
