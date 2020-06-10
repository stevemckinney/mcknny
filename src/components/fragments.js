import { graphql } from "gatsby";

export const listProjects = graphql`
  fragment projects on Mdx {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
