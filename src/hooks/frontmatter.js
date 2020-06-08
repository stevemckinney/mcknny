import { graphql, useStaticQuery } from "gatsby";

export const useFrontmatter = () => {
  const { site } = useStaticQuery(graphql`
    query FRONTMATTER {
      mdx {
        frontmatter {
          published
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
