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