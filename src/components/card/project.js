import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from 'gatsby-image';
// import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ link, data }) => {
  const projectStyles = `${styles.container}`;

  return (
    <React.Fragment>
      <article className={`${projectStyles}`}>
        {/*<Dump image={data}/>;*/}
          <Link to={link} className="block">
            <Img fluid={data.image.childImageSharp.fluid} className="mb-8" />
          </Link>
          <h2 className="font-headline text-f3">
            <Link to={link} className="block">
              {data.description}
            </Link>
          </h2>
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
