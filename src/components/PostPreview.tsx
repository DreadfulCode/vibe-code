import React from "react"
import { Link } from "gatsby"

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    tags?: string[]
  }
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const { slug, title, date, excerpt, tags } = post

  const styles = {
    card: {
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)',
      }
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontFamily: 'Work Sans, sans-serif',
      color: 'hsl(222, 47%, 11%)',
    },
    titleLink: {
      color: 'hsl(222, 47%, 11%)',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    },
    titleLinkHover: {
      color: '#1EAEDB',
    },
    date: {
      fontSize: '0.875rem',
      color: '#666',
      marginBottom: '0.5rem',
      fontFamily: 'Inter, sans-serif',
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      gap: '0.5rem',
      marginBottom: '0.75rem',
    },
    tag: {
      fontSize: '0.75rem',
      backgroundColor: 'rgba(30, 174, 219, 0.1)',
      color: '#1EAEDB',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      textDecoration: 'none',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
    },
    excerpt: {
      color: 'hsl(222, 47%, 11%, 0.8)',
      marginBottom: '1rem',
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.6',
    },
    footer: {
      marginTop: 'auto',
    },
    readMoreLink: {
      color: '#1EAEDB',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      transition: 'color 0.2s ease',
    },
    readMoreIcon: {
      marginLeft: '0.25rem',
      width: '1rem',
      height: '1rem',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <article style={styles.card}>
      <header>
        <h2 style={styles.title}>
          <Link 
            to={slug} 
            style={styles.titleLink}
            onMouseOver={(e) => e.currentTarget.style.color = '#1EAEDB'}
            onMouseOut={(e) => e.currentTarget.style.color = 'hsl(222, 47%, 11%)'}
          >
            {title}
          </Link>
        </h2>
        <time style={styles.date}>{date}</time>
        {tags && tags.length > 0 && (
          <div style={styles.tagsContainer}>
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                style={styles.tag}
              >
                {tag}
              </Link>
            ))}
            {tags.length > 3 && (
              <span style={{fontSize: '0.75rem', color: '#666'}}>
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </header>
      <div style={styles.excerpt}>
        <p>{excerpt}</p>
      </div>
      <footer style={styles.footer}>
        <Link
          to={slug}
          style={styles.readMoreLink}
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
            style={styles.readMoreIcon}
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
      </footer>
    </article>
  )
}

export default PostPreview
