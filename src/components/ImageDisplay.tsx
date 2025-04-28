import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface ImageDisplayProps {
  src: string
  alt: string
  caption?: string
  gatsbyImageData?: any
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, caption, gatsbyImageData }) => {
  const styles = {
    container: {
      marginBottom: '2rem',
    },
    imageWrapper: {
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    caption: {
      marginTop: '0.75rem',
      fontSize: '0.875rem',
      color: '#666',
      textAlign: 'center' as 'center',
      fontStyle: 'italic',
    },
  };

  // If we have Gatsby image data, use GatsbyImage
  if (gatsbyImageData) {
    const image = getImage(gatsbyImageData)
    
    if (image) {
      return (
        <figure style={styles.container}>
          <div style={styles.imageWrapper}>
            <GatsbyImage image={image} alt={alt} />
          </div>
          {caption && <figcaption style={styles.caption}>{caption}</figcaption>}
        </figure>
      )
    }
  }
  
  // Otherwise, use a regular image
  return (
    <figure style={styles.container}>
      <div style={styles.imageWrapper}>
        <img src={src} alt={alt} style={styles.image} />
      </div>
      {caption && <figcaption style={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

export default ImageDisplay
