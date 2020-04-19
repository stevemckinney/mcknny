import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import styles from "./header.module.css";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          short_name
        }
      }
    }
  `);

  return (
    <header className={`${ styles.header }`}>
      <Link to="/" className="block text-f4 font-bold">
        {site.siteMetadata.short_name}
      </Link>

      <button
        className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <nav className={`${ isExpanded ? `block` : `hidden` } md:grid grid-auto-columns-min-content gap-12 w-full md:w-auto`}>
        {[
          {
            route: `/portfolio`,
            title: `Portfolio`,
          },
          {
            route: `https://iamsteve.me`,
            title: `Blog`,
          },
          {
            route: `/about`,
            title: `About`,
          },
          {
            route: `/contact`,
            title: `Contact`,
          },
        ].map((link) => (
          <Link
            className="no-underline block"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
