import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "../header";
import Footer from "../footer";

import styles from "./layout.module.css";

function Layout({ children }) {
  const layoutClass = `font-body ${styles.layout}`;
  
  return (
    <React.Fragment>
      <Helmet key="head" bodyAttributes={{ class: layoutClass }}>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://typekit.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
      </Helmet>
      <Header />
      
      <main className="content contain">
        {children}
      </main>

      <Footer />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;