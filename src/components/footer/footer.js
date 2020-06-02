import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import About from "@components/sections/about";
import Divider from "@components/content/divider";

// style
import styles from "./footer.module.css";

// svg
// import Figma from "@images/figma.inline.svg";
// <Figma className={`${styles.illo} ${styles.figma}`} />
import Pen from "@images/pen.inline.svg";
import Terminal from "@images/terminal.inline.svg";

const Footer = (props) => {
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
  
  const footerStyles = `${props.className} bg-i grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center pb-16`;
  
  return (
    <React.Fragment>
      <footer className={footerStyles}>
        <About className="content" />
        <Divider className="content" />

        <p className="content text-f4 relative mb-0">© {new Date().getFullYear()} • {site.siteMetadata.title}</p>
        <Pen className={`${styles.pen}`} />
        <Terminal className={`${styles.terminal}`} />
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  className: PropTypes.node,
}


export default Footer;
