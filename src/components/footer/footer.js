import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

// components
import Bullet from "@components/content/bullet";

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
  const footerStyles = `${props.className} ${styles.footer} grid layout flex items-end md:items-center mdMax:justify-center pb-48 md:pb-16`;

  return (
    <React.Fragment>
      <footer className={footerStyles}>
        <p className="content mb-0 text-f8 text-pearl lowercase font-title font-medium text-center">
          © {new Date().getFullYear()}<Bullet className="bg-patina mx-3" />{site.siteMetadata.title}<Bullet className="bg-patina mx-3" />designed & built with figma, gatsby & netlify
        </p>
      </footer>
    </React.Fragment>
  );
}

Footer.defaultProps = {
  className: "footer"
}

Footer.propTypes = {
  className: PropTypes.node,
}

export default Footer;
