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

  return (
    <header className={ `contain header fixed right-0 left-0 flex items-center justify-between z-10 mdMax:bottom-0 mdMax:bg-madison md:top-0 ${styles.header}` }>
      <Link to="/" className="block text-f5 font-bold py-8">
        {site.siteMetadata.short_name}
      </Link>

      <Nav links={site.siteMetadata.navigation} />
    </header>
  );
}

export default Header;
