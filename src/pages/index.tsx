import * as React from "react"
import { HeadFC, PageProps, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import PostPreview from "../components/PostPreview"

interface MarkdownRemark {
  fields?: {
    slug?: string;
  };
  frontmatter?: {
    title?: string;
    date?: string;
    tags?: string[];
    excerpt?: string;
  };
}

interface IndexPageData {
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
}

const IndexPage: React.FC<PageProps<IndexPageData>> = ({ data }) => {
  // Get featured posts from GraphQL query
  const featuredPosts = data?.allMarkdownRemark?.nodes?.map((node: MarkdownRemark) => ({
    slug: node.fields?.slug || "",
    title: node.frontmatter?.title || "",
    date: node.frontmatter?.date || "",
    excerpt: node.frontmatter?.excerpt || "",
    tags: node.frontmatter?.tags as string[] || [],
  })) || [];

  const sampleCode = `// Example JavaScript code with the "Run it!" feature
function greet(name) {
  return \`Hello, \${name}! Welcome to Vibe Coding With Fred.\`;
}

// Try running this code!
console.log(greet("Developer"));
console.log("The current date is: " + new Date().toLocaleDateString());
`;

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    heroSection: {
      background: 'linear-gradient(to right, #1E88E5, #0D47A1)',
      color: 'white',
      padding: '4rem 0',
    },
    heroContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      textAlign: 'center' as 'center',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    heroText: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      maxWidth: '600px',
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.6',
    },
    heroButton: {
      display: 'inline-block',
      background: 'white',
      color: '#1E88E5',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.25rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontFamily: 'Inter, sans-serif',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    imageContainer: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '2rem auto',
    },
    featuredSection: {
      background: '#f8f9fa',
      padding: '4rem 0',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center' as 'center',
      marginBottom: '2rem',
    },
    postsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    },
    postCard: {
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    postTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontFamily: 'Work Sans, sans-serif',
      color: 'hsl(222, 47%, 11%)',
    },
    postDate: {
      fontSize: '0.875rem',
      color: '#666',
      marginBottom: '0.5rem',
      fontFamily: 'Inter, sans-serif',
    },
    postExcerpt: {
      marginBottom: '1rem',
      color: 'hsl(222, 47%, 11%, 0.8)',
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.6',
    },
    postLink: {
      color: '#1E88E5',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      transition: 'color 0.2s ease',
    },
    codeSection: {
      padding: '4rem 0',
    },
    codeContainer: {
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
    },
    codeTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    codeText: {
      marginBottom: '1.5rem',
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.6',
      color: 'hsl(222, 47%, 11%, 0.8)',
    },
    codeBlock: {
      background: '#282c34',
      color: 'white',
      padding: '1rem',
      borderRadius: '0.25rem',
      overflow: 'auto',
      fontFamily: 'monospace',
      whiteSpace: 'pre' as 'pre',
    },
    featuresSection: {
      background: '#f8f9fa',
      padding: '4rem 0',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
    },
    featureCard: {
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
    },
  };

  return (
    <Layout>
      <section style={styles.heroSection}>
        <div style={{...styles.heroContainer, ...styles.container}}>
          <h1 style={{...styles.heroTitle, fontFamily: 'Work Sans, sans-serif'}}>Download This Developer Blog Template</h1>
          <p style={styles.heroText}>
            Built with Gatsby, a static site generator.
          </p>
          <a
            href="https://github.com/DreadfulCode/vibe-code"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.heroButton}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section style={styles.featuredSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, fontFamily: 'Work Sans, sans-serif'}}>Featured Articles</h2>
          <div style={styles.postsGrid}>
            {featuredPosts.map((post) => (
              <div key={post.slug} style={styles.postCard}>
                <h3 style={styles.postTitle}>
                  <Link
                    to={post.slug}
                    style={{color: 'inherit', textDecoration: 'none'}}
                    onMouseOver={(e) => e.currentTarget.style.color = '#1E88E5'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'hsl(222, 47%, 11%)'}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p style={styles.postDate}>{post.date}</p>
                {post.tags && post.tags.length > 0 && (
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem'}}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?tag=${tag}`}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(30, 174, 219, 0.1)',
                          color: '#1EAEDB',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem',
                          textDecoration: 'none',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        {tag}
                      </Link>
                    ))}
                    {post.tags.length > 3 && (
                      <span style={{fontSize: '0.75rem', color: '#666'}}>
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
                <p style={styles.postExcerpt}>{post.excerpt}</p>
                <div style={{marginTop: 'auto'}}>
                  <Link
                    to={post.slug}
                    style={{...styles.postLink, display: 'inline-flex', alignItems: 'center'}}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#0F9FCE';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.transform = 'translateX(3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#1EAEDB';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.transform = 'translateX(0)';
                    }}
                  >
                    Read more
                    <svg
                      style={{marginLeft: '0.25rem', width: '1rem', height: '1rem', transition: 'transform 0.2s ease'}}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link
              to="/blog"
              style={{...styles.heroButton, background: '#1E88E5', color: 'white'}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.codeSection}>
        <div style={styles.container}>
          <div style={styles.codeContainer}>
            <h2 style={{...styles.codeTitle, fontFamily: 'Work Sans, sans-serif'}}>Try Our Code Runner</h2>
            <p style={styles.codeText}>
              One of the unique features of Vibe Coding With Fred is the ability to run JavaScript code snippets directly in the browser. Try it out below!
            </p>
            <pre style={styles.codeBlock}>{sampleCode}</pre>
          </div>
        </div>
      </section>

      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, fontFamily: 'Work Sans, sans-serif'}}>Why Vibe Coding?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={{...styles.featureTitle, fontFamily: 'Work Sans, sans-serif'}}>Beautiful Code Blocks</h3>
              <p style={{fontFamily: 'Inter, sans-serif', lineHeight: '1.6', color: 'hsl(222, 47%, 11%, 0.8)'}}>
                Syntax highlighting, line numbers, and a copy button make sharing code a breeze.
              </p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={{...styles.featureTitle, fontFamily: 'Work Sans, sans-serif'}}>Run JavaScript Code</h3>
              <p style={{fontFamily: 'Inter, sans-serif', lineHeight: '1.6', color: 'hsl(222, 47%, 11%, 0.8)'}}>
                Execute JavaScript snippets directly in the browser with our "Run it!" feature.
              </p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={{...styles.featureTitle, fontFamily: 'Work Sans, sans-serif'}}>Image Optimization</h3>
              <p style={{fontFamily: 'Inter, sans-serif', lineHeight: '1.6', color: 'hsl(222, 47%, 11%, 0.8)'}}>
                Images are automatically optimized and served from a CDN for fast loading.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vibe Coding With Fred | Modern Developer Blog</title>

// Query for featured posts
export const query = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          tags
          excerpt
        }
      }
    }
  }
`
