import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

// components
import Project from "@components/card/project";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query listProjects {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 2
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

Projects.defaultProps = {
  limit: -1,
};

Projects.propTypes = {
  limit: PropTypes.number,
}

export default Projects;
