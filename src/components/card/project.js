import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from 'gatsby-image';
// import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ className, link, props }) => {
  return (
    <React.Fragment>
      {/* <Dump link={props} /> */}
      <article className={`${styles.container} ${className}`}>
        <Link to={link} className="block">
          <Img fluid={props.image.childImageSharp.fluid} className="mb-8" />
        </Link>
        <h2 className="font-headline text-f3">
          <Link to={link} className="block">
            {props.description}
          </Link>
        </h2>
      </article>
    </React.Fragment>
  )
}

Project.defaultProps = {
  className: "auto-fit"
};


Project.propTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  image: PropTypes.node,
  props: PropTypes.node,
}

export default Project;
