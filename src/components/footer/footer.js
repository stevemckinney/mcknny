import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// style
import styles from "./footer.module.css";

// svg
// import Figma from "@images/figma.inline.svg";
// <Figma className={`${styles.illo} ${styles.figma}`} />
import Pen from "@images/pen.inline.svg";
import Terminal from "@images/terminal.inline.svg";

function Footer() {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          short_name
        }
      }
    }
  `);
  
  return (
    <footer className="bg-madison py-16">
      <p className="font-bold">© {new Date().getFullYear()} • {site.siteMetadata.title}</p>
      <Pen className={`${styles.illo} ${styles.pen}`} />
      <Terminal className={`${styles.illo} ${styles.terminal}`} />
    </footer>
  );
}

export default Footer;
