import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

// components
import Project from "@components/card/project";
// import Dump from "@components/dump";

const Projects = ({ props }) => {
  return (
    <StaticQuery
      query={graphql`
        query listProjects {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
            limit: 2
          ) {
            nodes {
              id
              frontmatter {
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
              }
              fields {
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          {/*<Dump projectsProps={props} />*/}
          {/*<Dump projectsData={data} />*/}
          {data.allMdx.nodes.map(({ fields, frontmatter }) => (
            <React.Fragment key={data.id}>
              <Project className={props.classNameProject} link={fields.slug} props={frontmatter} />
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    />
  )
}

Projects.propTypes = {
  classNameProject: PropTypes.string,
  data: PropTypes.node.isRequired,
  props: PropTypes.node,
}

export default Projects;
