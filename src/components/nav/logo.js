import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// css
import styles from "./logo.module.css";

const Logo = (props) => {
  const { site } = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          title
          short_name
        }
      }
    }
  `);
  const logoStyles = `${styles.logo} ${props.className} block text-f7 md:text-f6 font-medium font-title`;

  return (
    <React.Fragment>
      <AniLink
        cover
        bg="#1A2D3D"
        direction="right"
        to="/"
        className={logoStyles}
      >
        {site.siteMetadata.short_name}.
      </AniLink>
    </React.Fragment>
  )
}

Logo.propTypes = {
  className: PropTypes.node,
}

export default Logo;
