import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import Nav from "../nav";
import styles from "./header.module.css";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
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
  
  const headerStyles = `${styles.header} fixed right-0 left-0 z-10 mdMax:bottom-0 mdMax:bg-madison md:top-0`;
  const logoStyles = `${styles.logo} block text-f7 md:text-f5 font-bold py-8`; 

  return (
    <header className={ headerStyles }>
      <Link to="/" className={ logoStyles }>
        {site.siteMetadata.short_name}
      </Link>

      <Nav links={site.siteMetadata.navigation} />
    </header>
  );
}

export default Header;
