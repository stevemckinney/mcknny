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
  const footerStyles = `${props.className} ${styles.footer} flex lg:grid layout items-end md:items-center mdMax:justify-center pb-48 md:pb-16`;

  return (
    <React.Fragment>
      <footer className={footerStyles}>
        <p className="lg:content-start lg:col-end-6 mb-0 text-f8 text-pearl lowercase font-title font-medium">
          © {new Date().getFullYear()}<Bullet className="bg-patina mx-3" />{site.siteMetadata.title}
        </p>
        <p className="lg:col-start-6 lg:content-end mb-0 text-f8 text-pearl lowercase font-title font-medium text-right">designed & built with figma, gatsby & netlify</p>
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
