import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styles from "./project.module.css";

const Project = ({ links }) => {
  const projectStyles = `${styles.container} flex mdMax:w-full md:justify-end font-title`;
  const linkStyles = `${styles.link} mdMax:flex-1 mdMax:text-center no-underline inline-block text-f7 md:text-f6 font-medium py-8`;
  
  return (
    <React.Fragment>
      <div className={projectStyles}>
      </div>
    </React.Fragment>
  )
}

Project.propTypes = {
  links: PropTypes.array.isRequired
}

export default Project;
