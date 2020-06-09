import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Nav from "../nav";
import Logo from "@components/nav/logo";
import Tabbar from "../nav/tabbar";
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

  const headerStyles = `${styles.header} ${props.className} grid mdMax:hidden fixed right-0 left-0 z-10 top-0 sm:layout md:layout lg:layout items-center text-pearl`;

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
