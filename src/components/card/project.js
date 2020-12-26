import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";
//import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ frontmatter, className, link }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={frontmatter} />*/}
      <motion.article
        className={`${styles.container} ${className}`}
        whileHover={{
          scale: .95
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
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </Link>
        <div className="meta px-8 py-8 xs:px-8 lg:px-20 xl:py-16 xl:px-24 text-center">
          <p className="block text-f7 md:text-f5 text-harp font-body mb-1">{frontmatter.title}</p>
          <h2 className="font-headline text-f2 xl:text-f2 m-0">
            <Link to={link} className="block">
              {frontmatter.description}
            </Link>
          </h2>
        </div>
      </motion.article>
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
