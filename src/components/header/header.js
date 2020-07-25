import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Nav from "@components/nav";
import Logo from "@components/nav/logo";
import Tabbar from "@components/nav/tabbar";
import styles from "./header.module.css";

const Header = (props) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          short_name
          navigation {
            title
            route
          }
        }
      }
    }
  `);

  const headerStyles = `${props.className} ${styles.header} grid layout absolute md:fixed right-0 left-0 z-50 top-0 sm:py-6 lg:py-10 items-center text-pearl`;

  return (
    <React.Fragment>
      <header className={ headerStyles }>
        <Logo className="py-8" />
        <Nav links={site.siteMetadata.navigation} />
      </header>

      <Tabbar logo={site.siteMetadata.short_name} links={site.siteMetadata.navigation} />
    </React.Fragment>
  );
}

Header.propTypes = {
  className: PropTypes.node,
}

export default Header;
