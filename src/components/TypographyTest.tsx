import React from "react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from "./ui/typography"

const TypographyTest: React.FC = () => {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <TypographyH1>Typography Test Page</TypographyH1>
        <TypographyLead>
          This page demonstrates the typography components from shadcn/ui.
        </TypographyLead>
      </div>

      <div>
        <TypographyH2>Headings</TypographyH2>
        <TypographyH1>Heading 1</TypographyH1>
        <TypographyH2>Heading 2</TypographyH2>
        <TypographyH3>Heading 3</TypographyH3>
        <TypographyH4>Heading 4</TypographyH4>
      </div>

      <div>
        <TypographyH2>Paragraphs</TypographyH2>
        <TypographyP>
          This is a paragraph of text. Typography is the art and technique of
          arranging type to make written language legible, readable, and
          appealing when displayed.
        </TypographyP>
        <TypographyP>
          The arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </TypographyP>
      </div>

      <div>
        <TypographyH2>Blockquote</TypographyH2>
        <TypographyBlockquote>
          "Typography is the craft of endowing human language with a durable
          visual form." — Robert Bringhurst
        </TypographyBlockquote>
      </div>

      <div>
        <TypographyH2>Lists</TypographyH2>
        <TypographyList>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item with <TypographyInlineCode>inline code</TypographyInlineCode></li>
        </TypographyList>
      </div>

      <div>
        <TypographyH2>Inline Code</TypographyH2>
        <TypographyP>
          Here is some <TypographyInlineCode>inline code</TypographyInlineCode> within a paragraph.
        </TypographyP>
      </div>

      <div>
        <TypographyH2>Text Sizes</TypographyH2>
        <TypographyLarge>Large Text</TypographyLarge>
        <TypographyP>Normal Text</TypographyP>
        <TypographySmall>Small Text</TypographySmall>
        <TypographyMuted>Muted Text</TypographyMuted>
      </div>
    </div>
  )
}

export default TypographyTest