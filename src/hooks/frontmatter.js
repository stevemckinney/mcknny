import { graphql, useStaticQuery } from "gatsby";

// TODO: sort order of projects https://youtu.be/2GDbxZ0mHbM?t=378
export const useFrontmatter = (
  sort: {
    fields: [frontmatter___date],
    order: DESC
  }
) => {
  const { site } = useStaticQuery(graphql`
    query FRONTMATTER {
      mdx {
        frontmatter {
          published
          date
          title
          role
          category
          url
        }
        tableOfContents(maxDepth: 10)
        timeToRead
        wordCount {
          words
        }
      }
    }
  `);
  return site.siteMetadata;
}
