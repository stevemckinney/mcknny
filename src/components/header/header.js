import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import Nav from "../nav";
import Tabbar from "../nav/tabbar";
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
  
  const headerStyles = `${styles.header} grid mdMax:hidden fixed right-0 left-0 z-10 top-0 lg:layout items-center`;
  const logoStyles = `${styles.logo} block text-f4 font-bold py-8`; 

  return (
    <React.Fragment>
      <header className={ headerStyles }>
        <Link to="/" className={ logoStyles }>
          {site.siteMetadata.short_name}
        </Link>
  
        <Nav links={site.siteMetadata.navigation} />
      </header>
      
      <Tabbar logo={site.siteMetadata.short_name} links={site.siteMetadata.navigation} />
    </React.Fragment>
  );
}

export default Header;
