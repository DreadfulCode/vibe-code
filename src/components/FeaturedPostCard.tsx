import React from "react"
import { Link } from "gatsby"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "./ui/card"
import { TypographyMuted, TypographySmall } from "./ui/typography"

interface FeaturedPostCardProps {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    tags?: string[]
  }
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  const { slug, title, date, excerpt, tags } = post

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>
          <Link 
            to={slug} 
            className="text-foreground hover:text-primary transition-colors no-underline"
          >
            {title}
          </Link>
        </CardTitle>
        <TypographyMuted>{date}</TypographyMuted>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium no-underline hover:bg-primary/20 transition-colors"
              >
                {tag}
              </Link>
            ))}
            {tags.length > 3 && (
              <TypographySmall className="text-muted-foreground">
                +{tags.length - 3}
              </TypographySmall>
            )}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
      </CardContent>
      
      <CardFooter>
        <Link
          to={slug}
          className="text-primary font-medium inline-flex items-center hover:text-primary/80 transition-all group no-underline"
        >
          Read more
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
      </CardFooter>
    </Card>
  )
}

export default FeaturedPostCard