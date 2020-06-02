import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "@components/header";
import Footer from "@components/footer";

// css
import styles from "./layout.module.css";

function Layout({ children }) {
  const layoutClass = `font-body bg ${styles.layout}`;
  
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
      
      <main className="content">
        {children}
      </main>
      
      <Footer className="content" />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
