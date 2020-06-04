import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

// components
import Profile from "@components/sections/profile";
import Divider from "@components/content/divider";
import Prompt from "@components/content/prompt";

// style
import styles from "./footer.module.css";

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
  
  const footerStyles = `${props.className} ${styles.footer} grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center pb-16`;
  
  return (
    <React.Fragment>
      <Prompt className="py-48 grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center" />
      <Divider className="divider" />
      <Profile className="py-48 grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center" />
      <footer className={footerStyles}>
        <p className="content text-f4 relative mb-0">© {new Date().getFullYear()} • {site.siteMetadata.title}</p>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  className: PropTypes.node,
}


export default Footer;
