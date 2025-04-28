import React from "react"
import CodeBlock from "./CodeBlock"
import ImageDisplay from "./ImageDisplay"

interface MDXWrapperProps {
  children: React.ReactNode
}

const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => {
  return <div style={{ maxWidth: '100%' }}>{children}</div>
}

// Custom components for MDX content
const components = {
  // Override pre and code blocks
  pre: (props: any) => <div {...props} />,
  code: (props: any) => {
    const { children, className, live } = props
    // If it's a code block (has language class)
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>
    }
    // It's an inline code
    return <code style={{ backgroundColor: 'rgba(30, 136, 229, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '0.25rem', fontFamily: 'monospace' }}>{children}</code>
  },
  // Custom image component
  img: (props: any) => <ImageDisplay src={props.src} alt={props.alt} caption={props.title} />,
  // Heading styles
  h1: (props: any) => <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '2rem' }} {...props} />,
  h2: (props: any) => <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '1.5rem' }} {...props} />,
  h3: (props: any) => <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', marginTop: '1.25rem' }} {...props} />,
  h4: (props: any) => <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem' }} {...props} />,
  h5: (props: any) => <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem' }} {...props} />,
  h6: (props: any) => <h6 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem' }} {...props} />,
  // Paragraph and list styles
  p: (props: any) => <p style={{ marginBottom: '1rem', lineHeight: '1.7' }} {...props} />,
  ul: (props: any) => <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }} {...props} />,
  ol: (props: any) => <ol style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'decimal' }} {...props} />,
  li: (props: any) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
  // Link styles
  a: (props: any) => <a style={{ color: '#1E88E5', textDecoration: 'none', borderBottom: '1px solid rgba(30, 136, 229, 0.3)' }} {...props} />,
  // Blockquote styles
  blockquote: (props: any) => (
    <blockquote 
      style={{ 
        borderLeft: '4px solid #1E88E5', 
        paddingLeft: '1rem', 
        marginLeft: '0', 
        marginRight: '0', 
        marginTop: '1rem', 
        marginBottom: '1rem',
        fontStyle: 'italic',
        color: '#555'
      }} 
      {...props} 
    />
  ),
  // Table styles
  table: (props: any) => <table style={{ width: '100%', marginBottom: '1rem', borderCollapse: 'collapse' }} {...props} />,
  thead: (props: any) => <thead style={{ borderBottom: '2px solid #eee' }} {...props} />,
  th: (props: any) => <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold' }} {...props} />,
  td: (props: any) => <td style={{ padding: '0.5rem', borderTop: '1px solid #eee' }} {...props} />,
  // Horizontal rule
  hr: (props: any) => <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} {...props} />,
}

export default MDXWrapper
