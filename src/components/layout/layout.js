import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

// components
import Header from "@components/header";
import Footer from "@components/footer";

// design
import background from "../../images/bg.svg";

function Layout({ className, children, location }) {
  const layoutClass = `bg-prussian bg-pattern`;

  return (
    <React.Fragment>
      <Helmet key="head" bodyAttributes={{ class: layoutClass }}>
        <link rel="preconnect" href="https://typekit.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
        <style>
          {`.bg-pattern { background: url(${background}) var(--color-prussian) top center repeat; }`}
        </style>
      </Helmet>

      <Header className="header" />

      <main className={className} key={location.pathname}>
        {children}
      </main>

      <Footer />
    </React.Fragment>
  );
}

Layout.defaultProps = {
  className: "grid layout",
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout;
