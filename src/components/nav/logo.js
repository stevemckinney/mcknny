import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery, Link } from "gatsby";

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
  const logoStyles = `${styles.logo} ${props.className} block text-f6 font-medium font-title`; 
  
  return (
    <React.Fragment>
      <Link to="/" className={ logoStyles }>
        {site.siteMetadata.short_name}.
      </Link>
    </React.Fragment>
  )
}

Logo.propTypes = {
  className: PropTypes.node,
}

export default Logo;