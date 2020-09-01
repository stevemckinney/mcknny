import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";
// import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ props, className, link }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={props.image.childImageSharp} />*/}
      <motion.article
        className={`${styles.container} ${className}`}
        whileHover={{
          scale: .975
        }}
        whileTap={{
          opacity: .6
        }}
        transition={{
          duration: .4,
          ease: "easeOut"
        }}
      >
        <Link to={link} className="block">
          <Img fluid={props.image.childImageSharp.fluid} />
        </Link>
        <h2 className="font-headline text-f4 md:text-f3 xl:text-f2 m-0 text-center">
          <Link to={link} className="block px-8 pt-8 lg:px-20 xl:pt-16 xl:px-24 lowercase">
            {props.description}
          </Link>
        </h2>
      </motion.article>
    </React.Fragment>
  )
}

Project.defaultProps = {
  className: "auto-fit"
};


Project.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.node,
  props: PropTypes.node,
}

export default Project;
