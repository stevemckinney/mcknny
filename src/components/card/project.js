import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";
//import Dump from "@components/dump";

// css
import styles from "./project.module.css";

// motion
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

const Project = ({ frontmatter, className, link }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={frontmatter} />*/}
      <motion.article 
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={list}
        className={`${styles.container} ${className}`}
      >
        <motion.div variants={item}>
          <Link to={link} className="block">
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          </Link>
        </motion.div>
        <motion.div variants={item} className="meta px-8 py-8 lg:px-20 xl:py-12 xl:px-24 xxl:px-16 text-center">
          <p className="block text-f7 md:text-f6 lg:text-f5 text-patina font-medium font-title lowercase mb-1">{frontmatter.title}</p>
          <h2 className="font-headline text-f3 lg:text-f2 m-0 w-11/12 mx-auto">
            <Link to={link} className="block">
              {frontmatter.description}
            </Link>
          </h2>
        </motion.div>
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
