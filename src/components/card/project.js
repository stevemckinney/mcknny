import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from 'gatsby-image';
// import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ link, data }) => {
  const projectStyles = `${styles.container}`;
  const linkStyles = `${styles.link}`;

  return (
    <React.Fragment>
      <article className={projectStyles}>
        {/*<Dump image={data}/>;*/}
        <Img fluid={data.image.childImageSharp.fluid}/>
        <h2 className="font-headline">{data.description}</h2>
        <Link to={link} className={linkStyles}>View project</Link>
      </article>
    </React.Fragment>
  )
}

Project.propTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  image: PropTypes.node
}

export default Project;
