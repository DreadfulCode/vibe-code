import * as React from "react"
import { graphql, HeadFC, PageProps, Link } from "gatsby"
import Layout from "../components/Layout"

interface BlogPostData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      date: string;
      tags?: string[];
    };
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const post = data.markdownRemark
  const { title, date, tags } = post.frontmatter

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontFamily: 'Work Sans, sans-serif',
    },
    meta: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      alignItems: 'center',
      color: '#666',
      marginBottom: '1rem',
      fontFamily: 'Inter, sans-serif',
    },
    date: {
      marginRight: '1rem',
      fontFamily: 'Inter, sans-serif',
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      gap: '0.5rem',
    },
    tag: {
      fontSize: '0.75rem',
      backgroundColor: 'rgba(30, 174, 219, 0.2)',
      color: '#1EAEDB',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      textDecoration: 'none',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500',
    },
    content: {
      lineHeight: '1.7',
      fontSize: '1.125rem',
      fontFamily: 'Inter, sans-serif',
      color: 'hsl(222, 47%, 11%)',
    },
    footer: {
      marginTop: '3rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
    },
    backLink: {
      color: '#1EAEDB',
      textDecoration: 'none',
      fontWeight: '500',
    },
    shareContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    shareText: {
      marginRight: '0.5rem',
    },
    shareLinks: {
      display: 'flex',
      gap: '0.5rem',
    },
    twitterLink: {
      color: '#1DA1F2',
      textDecoration: 'none',
      fontWeight: '500',
    },
    linkedinLink: {
      color: '#0077B5',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <Layout title={title}>
      <article style={styles.container}>
        <header style={styles.header}>
          <div style={styles.meta}>
            <time style={styles.date}>{date}</time>
            {tags && tags.length > 0 && (
              <div style={styles.tagsContainer}>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    style={styles.tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        <div 
          className="blog-content"
          style={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer style={styles.footer}>
          <Link to="/blog" style={styles.backLink}>
            ← Back to all posts
          </Link>
          <div style={styles.shareContainer}>
            <span style={styles.shareText}>Share:</span>
            <div style={styles.shareLinks}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  title
                )}&url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.twitterLink}
                aria-label="Share on Twitter"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkedinLink}
                aria-label="Share on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head: HeadFC<BlogPostData> = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} | Vibe Coding With Fred</title>
)

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`
