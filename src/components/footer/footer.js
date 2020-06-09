import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

// components
import Profile from "@components/sections/profile";
import Divider from "@components/content/divider";
import Prompt from "@components/content/prompt";
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
  const propClassName = props.className || "footer";
  const footerStyles = `${propClassName} ${styles.footer} grid mdMax:justify-center sm:layout md:layout lg:layout flex items-end md:items-center pb-16`;

  return (
    <React.Fragment>
      <Prompt className="py-36 grid mdMax:justify-center sm:layout md:layout lg:layout flex items-end md:items-center" />
      <Divider className="divider" />
      <Profile className="py-36 grid mdMax:justify-center sm:layout md:layout lg:layout flex items-end md:items-center" />
      <footer className={footerStyles}>
        <p className="content mb-0 text-f8 text-pearl uppercase tracking-title font-title font-bold">
          © {new Date().getFullYear()}<Bullet className="bg-madison mx-3" />{site.siteMetadata.title}
        </p>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  className: PropTypes.node,
}

export default Footer;
