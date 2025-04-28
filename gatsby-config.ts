import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vibe Coding With Fred`,
    description: `A developer blog sharing coding insights, tips, and tutorials with beautiful code blocks and image embedding.`,
    author: `Fred`,
    siteUrl: `https://vibecoding.dev`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark {
              nodes {
                fields {
                  slug
                }
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://vibecoding.dev",
        resolvePages: ({ allSitePage, allMarkdownRemark }: { allSitePage: any; allMarkdownRemark: any }) => {
          const blogPostsMap = allMarkdownRemark.nodes.reduce((acc: any, node: any) => {
            const { slug } = node.fields;
            acc[slug] = node;
            return acc;
          }, {});
          
          return allSitePage.nodes.map((page: any) => {
            return { ...page, ...blogPostsMap[page.path] };
          });
        },
        serialize: ({ path }: { path: string }) => {
          return {
            url: path,
            changefreq: path.includes('/blog/') ? 'weekly' : 'monthly',
            priority: path.includes('/blog/') ? 0.7 : 0.5,
          };
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}

export default config
