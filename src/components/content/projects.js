import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

// components
import Project from "@components/card/project";
//import Dump from "@components/dump";

// css
import styles from "./projects.module.css";

const Projects = () => {
  // 664x708
  return (
    <StaticQuery
      query={graphql`
        query listProjects {
          allMdx(
            sort: { fields: [frontmatter___date, frontmatter___priority], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
            limit: 4
          ) {
            nodes {
              id
              frontmatter {
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 1328, maxHeight: 2048, quality: 100, cropFocus: CENTER, fit: FILL) {
                      ...GatsbyImageSharpFluid_withWebp
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
          {data.allMdx.nodes.map(({ fields, frontmatter, id }) => (
            <React.Fragment key={id}>
              <Project className={`sm:col-span-5 ${styles.project}`} link={fields.slug} frontmatter={frontmatter} />
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    />
  )
}

Projects.propTypes = {
  data: PropTypes.node,
}

export default Projects;
