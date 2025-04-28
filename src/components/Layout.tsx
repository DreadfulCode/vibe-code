import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/fonts.css"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const layoutStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    padding: '1rem 0',
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1EAEDB',
    textDecoration: 'none',
    fontFamily: 'Work Sans, sans-serif',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#212121',
    textDecoration: 'none',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  },
  titleSection: {
    backgroundColor: '#1EAEDB',
    color: '#fff',
    padding: '3rem 0',
  },
  titleHeading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
    fontFamily: 'Work Sans, sans-serif',
  },
  main: {
    padding: '2rem 0',
  },
  footer: {
    backgroundColor: '#212121',
    color: '#fff',
    padding: '2rem 0',
  },
  footerInner: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '2rem',
  },
  footerHeading: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontFamily: 'Work Sans, sans-serif',
  },
  footerText: {
    color: '#ccc',
    fontFamily: 'Inter, sans-serif',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    display: 'block',
    fontFamily: 'Inter, sans-serif',
  },
  copyright: {
    borderTop: '1px solid #444',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    color: '#999',
    fontSize: '0.875rem',
    fontFamily: 'Inter, sans-serif',
  },
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Work+Sans:wght@500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <header style={layoutStyles.header}>
        <div style={{...layoutStyles.container, ...layoutStyles.headerInner}}>
          <Link to="/" style={layoutStyles.logo}>
            Vibe Coding With Fred
          </Link>
          <nav>
            <ul style={layoutStyles.nav}>
              <li>
                <Link to="/" style={layoutStyles.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" style={layoutStyles.navLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" style={layoutStyles.navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {title && (
          <div style={layoutStyles.titleSection}>
            <div style={layoutStyles.container}>
              <h1 style={layoutStyles.titleHeading}>{title}</h1>
            </div>
          </div>
        )}
        <div style={{...layoutStyles.container, ...layoutStyles.main}}>{children}</div>
      </main>

      <footer style={layoutStyles.footer}>
        <div style={{...layoutStyles.container, ...layoutStyles.footerInner}}>
          <div>
            <h3 style={layoutStyles.footerHeading}>Vibe Coding With Fred</h3>
            <p style={layoutStyles.footerText}>
              Sharing coding insights, tips, and tutorials with beautiful code blocks and image embedding.
            </p>
          </div>
          <div>
            <h4 style={layoutStyles.footerHeading}>Links</h4>
            <ul style={layoutStyles.footerLinks}>
              <li>
                <Link to="/" style={layoutStyles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" style={layoutStyles.footerLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" style={layoutStyles.footerLink}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div style={layoutStyles.copyright}>
            © {new Date().getFullYear()} Vibe Coding With Fred. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
