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
    <header className={ `contain ${styles.header}` }>
      <Link to="/" className="block text-f5 font-bold py-8">
        {site.siteMetadata.short_name}
      </Link>

      <Nav links={site.siteMetadata.navigation} />
    </header>
  );
}

export default Header;
