import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";

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
  const logoStyles = `${props.className} block text-f7 md:text-f6 font-medium font-title`;

  return (
    <React.Fragment>
      <div className={`${styles.logo} flex items-center content-center flex-row`}>
        <Link to="/" className={logoStyles}>
          {site.siteMetadata.short_name}
        </Link>
        <Link to="/roadmap/" className={`${styles.beta} ${props.className} bg-prussian hover:bg-madison z-50 flex items-center self-baseline text-jasmine uppercase font-bold text-f9 ml-2`}>
          Beta
        </Link>
      </div>
    </React.Fragment>
  )
}

Logo.propTypes = {
  className: PropTypes.node,
}

export default Logo;
