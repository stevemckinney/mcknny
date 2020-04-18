import React from "react";
import Helmet from 'react-helmet';
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet key="app-head">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://typekit.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
      </Helmet>
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
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
