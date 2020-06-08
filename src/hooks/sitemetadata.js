import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SITE_METADATA {
      site {
        siteMetadata {
          title
          short_name
          navigation {
            title
            route
          }
        }
      }
    }
  `);
  return site.siteMetadata;
}
