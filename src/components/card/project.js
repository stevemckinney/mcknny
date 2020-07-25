import React from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from 'gatsby-image';
// import Dump from "@components/dump";

// css
import styles from "./project.module.css";

const Project = ({ className, link, props }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={props.image.childImageSharp} />*/}
      <article className={`${styles.container} ${className} bg-prussian radius`}>
        <AniLink
          cover
          bg="#1A2D3D"
          direction="left"
          to={link}
          className="block"
        >
          <Img fluid={props.image.childImageSharp.fluid} />
        </AniLink>
        <h2 className="font-headline text-f4 md:text-f3 xl:text-f2 m-0 text-center">
          <AniLink
            cover
            bg="#1A2D3D"
            direction="left"
            to={link}
            className="block p-8 lg:px-20 xl:py-16 xl:px-32"
          >
            {props.description}
          </AniLink>
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
