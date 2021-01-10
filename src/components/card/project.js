import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
//import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ frontmatter, className, link }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={frontmatter} />*/}
      <article className={`${styles.container} ${className}`}>
        <Link to={link} className="block">
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </Link>
        <div className="meta px-8 py-8 lg:px-20 xl:py-16 xl:px-24 text-center">
          <p className="block text-f7 md:text-f5 text-patina font-medium font-title lowercase mb-1">{frontmatter.title}</p>
          <h2 className="font-headline text-f3 lg:text-f2 m-0 w-11/12 mx-auto">
            <Link to={link} className="block">
              {frontmatter.description}
            </Link>
          </h2>
        </div>
      </article>
    </React.Fragment>
  )
}

Project.defaultProps = {
  className: "auto-fit"
};


Project.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  frontmatter: PropTypes.shape({
    image: PropTypes.object,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default Project;
