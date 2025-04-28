# Vibe Coding With Fred - Style Guide

This style guide defines the visual language for the Vibe Coding With Fred blog, implementing shadcn/ui components in an incremental, non-disruptive way.

## Color Palette

### Base Colors

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Background | `hsl(210 40% 98%)` | `hsl(222 47% 11%)` | Page background |
| Foreground | `hsl(222 47% 11%)` | `hsl(210 40% 98%)` | Primary text |
| Primary | `hsl(196 80% 49%)` | `hsl(196 80% 49%)` | Buttons, links, accents |
| Secondary | `hsl(210 40% 96%)` | `hsl(217 32% 17%)` | Secondary UI elements |
| Muted | `hsl(210 40% 96%)` | `hsl(217 32% 17%)` | Subtle backgrounds |
| Card | `hsl(0 0% 100%)` | `hsl(222 47% 11%)` | Card backgrounds |
| Border | `hsl(214 32% 91%)` | `hsl(217 32% 17%)` | Borders |

### Semantic Colors

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Success | `hsl(142 72% 29%)` | `hsl(142 72% 29%)` | Success states |
| Warning | `hsl(38 92% 50%)` | `hsl(38 92% 50%)` | Warning states |
| Destructive | `hsl(0 84% 60%)` | `hsl(0 62% 30%)` | Error states, destructive actions |

## Typography

### Font Families

- **Headings**: Work Sans (sans-serif)
- **Body**: Inter (sans-serif)
- **Code**: IBM Plex Mono (monospace)

### Font Sizes

| Element | Size (rem) | Line Height | Weight | Letter Spacing |
|---------|------------|-------------|--------|----------------|
| h1 | 2.5 (desktop: 3.75) | 1 | 700 | -0.025em |
| h2 | 2.25 (desktop: 3) | 1.1 | 700 | -0.025em |
| h3 | 1.875 (desktop: 2.25) | 1.2 | 700 | -0.025em |
| h4 | 1.5 (desktop: 1.875) | 1.3 | 700 | -0.025em |
| h5 | 1.25 (desktop: 1.5) | 1.4 | 700 | -0.025em |
| h6 | 1.125 (desktop: 1.25) | 1.5 | 700 | -0.025em |
| Body | 1 | 1.75 | 400 | normal |
| Small | 0.875 | 1.5 | 400 | normal |
| Code | 0.875 | 1.7 | 400 | normal |

## Spacing

- **Base unit**: 0.25rem (4px)
- **Scale**: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
- **Usage**: Multiply the base unit by the scale value (e.g., 4 = 1rem or 16px)

## Border Radius

- **Small**: 0.125rem (2px)
- **Default**: 0.25rem (4px)
- **Medium**: 0.375rem (6px)
- **Large**: 0.5rem (8px)
- **Extra Large**: 0.75rem (12px)
- **Round**: 9999px

## Shadows

- **sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **DEFAULT**: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- **xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`

## Code Blocks

### Default Code Block

- Background: `hsl(220 13% 18%)` (dark) / `hsl(210 40% 96%)` (light)
- Text color: `hsl(220 14% 71%)` (dark) / `hsl(220 23% 28%)` (light)
- Border: 1px solid border color
- Border radius: 0.5rem
- Padding: 1rem
- Font family: IBM Plex Mono
- Font size: 0.875rem
- Line height: 1.7

### Code Block Header

- Background: Slightly darker/lighter than code block
- Border bottom: 1px solid border color
- Padding: 0.5rem 1rem
- Display: flex with space between
- Font size: 0.75rem
- Font weight: 500

### Syntax Highlighting

- Comments: `hsl(220 10% 40%)`
- Strings: `hsl(95 38% 62%)`
- Numbers: `hsl(29 54% 61%)`
- Keywords: `hsl(286 60% 67%)`
- Functions: `hsl(207 82% 66%)`
- Operators: `hsl(220 14% 71%)`
- Variables: `hsl(355 65% 65%)`

## Component Styles

### Buttons

#### Primary Button

- Background: Primary color
- Text: White
- Hover: Slightly darker primary
- Padding: 0.5rem 1rem
- Border radius: 0.25rem
- Font weight: 500

#### Secondary Button

- Background: Secondary color
- Text: Foreground color
- Hover: Slightly darker secondary
- Padding: 0.5rem 1rem
- Border radius: 0.25rem
- Font weight: 500

#### Ghost Button

- Background: Transparent
- Text: Foreground color
- Hover: Muted color
- Padding: 0.5rem 1rem
- Border radius: 0.25rem
- Font weight: 500

### Cards

- Background: Card color
- Border: 1px solid border color
- Border radius: 0.5rem
- Padding: 1.5rem
- Shadow: sm

### Links

- Color: Primary color
- Hover: Slightly darker primary
- Text decoration: none
- Font weight: 500

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Accessibility Guidelines

- Maintain a minimum contrast ratio of 4.5:1 for normal text
- Ensure interactive elements have clear focus states
- Provide alternative text for images
- Use semantic HTML elements
- Ensure keyboard navigability

## Implementation Strategy

1. Start with typography improvements
2. Enhance code blocks
3. Add tests to ensure layouts don't break
4. Implement changes incrementally