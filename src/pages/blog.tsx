import * as React from "react"
import { HeadFC, PageProps, Link, graphql } from "gatsby"
import Layout from "../components/Layout"

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

interface BlogPageData {
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  // Get all blog posts from GraphQL query
  const allPosts = data?.allMarkdownRemark?.nodes?.map((node: MarkdownRemark) => ({
    slug: node.fields?.slug || "",
    title: node.frontmatter?.title || "",
    date: node.frontmatter?.date || "",
    excerpt: node.frontmatter?.excerpt || "",
    tags: node.frontmatter?.tags as string[] || [],
  })) || [];

  // State for filtering and searching
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null)

  // Get all unique tags
  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags || []))
  ).sort()

  // Filter posts based on search term and selected tag
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    filterContainer: {
      marginBottom: '2rem',
    },
    filterRow: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    searchInput: {
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '0.25rem',
      width: '100%',
    },
    select: {
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '0.25rem',
      width: '100%',
    },
    tagBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: 'rgba(100, 181, 246, 0.2)',
      color: '#0D47A1',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.875rem',
    },
    tagRemoveButton: {
      marginLeft: '0.5rem',
      color: '#0D47A1',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '1rem',
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
    emptyState: {
      textAlign: 'center' as 'center',
      padding: '3rem 0',
    },
    emptyStateTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontFamily: 'Work Sans, sans-serif',
    },
    emptyStateText: {
      color: '#666',
    },
  };

  return (
    <Layout title="Blog">
      <div style={styles.container}>
        <div style={styles.filterContainer}>
          <div style={styles.filterRow}>
            <div>
              <input
                type="text"
                placeholder="Search articles..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                style={styles.select}
                value={selectedTag || ""}
                onChange={(e) => setSelectedTag(e.target.value || null)}
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedTag && (
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>Filtered by:</span>
              <span style={styles.tagBadge}>
                {selectedTag}
                <button
                  onClick={() => setSelectedTag(null)}
                  style={styles.tagRemoveButton}
                  aria-label="Remove filter"
                >
                  &times;
                </button>
              </span>
            </div>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div style={styles.postsGrid}>
            {filteredPosts.map((post) => (
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
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTag(tag);
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
        ) : (
          <div style={styles.emptyState}>
            <h3 style={styles.emptyStateTitle}>No articles found</h3>
            <p style={styles.emptyStateText}>
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog | Vibe Coding With Fred</title>

// Query for all blog posts
export const query = graphql`
  query BlogPage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
