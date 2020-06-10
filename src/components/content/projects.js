import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// components
import Project from "@components/card/project";
//import Dump from "@components/dump";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query listProjects {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            description
            url
            published
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <React.Fragment>
      {data.allMdx.nodes.map(({ fields, frontmatter }) => (
        <React.Fragment key={data.id}>
          <Project link={fields.slug} data={frontmatter} />
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Projects;
