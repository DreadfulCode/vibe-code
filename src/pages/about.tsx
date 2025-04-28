import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage: React.FC<PageProps> = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    bioSection: {
      marginBottom: '3rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      gap: '2rem',
    },
    imageContainer: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid #1E88E5',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    bioContent: {
      textAlign: 'center' as 'center',
    },
    bioHeading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: 'Work Sans, sans-serif',
      color: 'hsl(222, 47%, 11%)',
    },
    bioParagraph: {
      marginBottom: '1rem',
      lineHeight: '1.6',
      fontFamily: 'Inter, sans-serif',
      color: 'hsl(222, 47%, 11%, 0.8)',
    },
    section: {
      marginBottom: '3rem',
    },
    sectionHeading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: 'Work Sans, sans-serif',
      color: 'hsl(222, 47%, 11%)',
      borderBottom: '1px solid hsl(214, 32%, 91%)',
      paddingBottom: '0.5rem',
    },
    paragraph: {
      marginBottom: '1rem',
      lineHeight: '1.6',
      fontFamily: 'Inter, sans-serif',
      color: 'hsl(222, 47%, 11%, 0.8)',
    },
    list: {
      listStyle: 'disc',
      paddingLeft: '1.5rem',
      marginBottom: '1rem',
    },
    listItem: {
      marginBottom: '0.75rem',
      fontFamily: 'Inter, sans-serif',
      color: 'hsl(222, 47%, 11%, 0.8)',
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      gap: '1rem',
    },
    button: {
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.25rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    twitterButton: {
      backgroundColor: '#1DA1F2',
    },
    githubButton: {
      backgroundColor: '#333',
    },
    emailButton: {
      backgroundColor: '#1E88E5',
    },
  };

  return (
    <Layout title="About">
      <div style={styles.container}>
        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'Work Sans, sans-serif', color: 'hsl(222, 47%, 11%)'}}>About</h1>
        <div style={styles.bioSection}>
          <div style={styles.imageContainer}>
            <StaticImage
              src="../images/icon.png"
              alt="Fred"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div style={styles.bioContent}>
            <h2 style={styles.bioHeading}>Hi, I'm Fred!</h2>
            <p style={styles.bioParagraph}>
              I'm a passionate developer and educator who loves sharing knowledge about web development, 
              programming best practices, and the latest tech trends.
            </p>
            <p style={styles.bioParagraph}>
              With over 10 years of experience in the industry, I've worked on a wide range of projects 
              from small startups to large enterprise applications. I specialize in JavaScript, React, 
              and modern web technologies.
            </p>
            <p style={styles.bioParagraph}>
              Through Vibe Coding, I aim to make complex programming concepts accessible and enjoyable 
              for developers of all skill levels.
            </p>
          </div>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>About This Blog</h2>
          <p style={styles.paragraph}>
            Vibe Coding With Fred was created with a simple mission: to share coding knowledge in a 
            way that's both informative and enjoyable. I believe that learning to code should be an 
            exciting journey, not a dry academic exercise.
          </p>
          <p style={styles.paragraph}>
            What makes this blog special:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Interactive Code Examples:</strong> Try out code directly in your browser with 
              the "Run it!" feature.
            </li>
            <li style={styles.listItem}>
              <strong>Beautiful Visuals:</strong> Clear screenshots and diagrams help illustrate complex concepts.
            </li>
            <li style={styles.listItem}>
              <strong>Practical Tutorials:</strong> Real-world examples that you can apply to your own projects.
            </li>
            <li style={styles.listItem}>
              <strong>Modern Design:</strong> A clean, distraction-free reading experience.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Technical Details</h2>
          <p style={styles.paragraph}>
            This blog is built with modern web technologies:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Gatsby:</strong> A React-based framework for building fast, optimized websites.
            </li>
            <li style={styles.listItem}>
              <strong>Markdown:</strong> For writing content in a clean, simple format.
            </li>
            <li style={styles.listItem}>
              <strong>React:</strong> For building interactive UI components.
            </li>
            <li style={styles.listItem}>
              <strong>Prism:</strong> For beautiful syntax highlighting in code blocks.
            </li>
            <li style={styles.listItem}>
              <strong>Custom JavaScript Runner:</strong> For the interactive "Run it!" feature.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Get in Touch</h2>
          <p style={styles.paragraph}>
            Have questions, suggestions, or just want to say hi? I'd love to hear from you!
          </p>
          <div style={styles.buttonContainer}>
            <a
              href="https://twitter.com/vibecoding"
              style={{...styles.button, ...styles.twitterButton}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              Twitter
            </a>
            <a
              href="https://github.com/vibecoding"
              style={{...styles.button, ...styles.githubButton}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              GitHub
            </a>
            <a
              href="mailto:fred@vibecoding.dev"
              style={{...styles.button, ...styles.emailButton}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              Email Me
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About | Vibe Coding With Fred</title>
