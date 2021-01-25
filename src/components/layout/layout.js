import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

// components
import Header from "@components/header";
import Footer from "@components/footer";
import Profile from "@components/sections/profile";
import Divider from "@components/content/divider";
import Prompt from "@components/content/prompt";

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
          {`.bg-pattern { background-image: url(${background}); background-position: top center; background-repeat: repeat; }`}
        </style>
      </Helmet>

      <Header className="header" />

      <main className={className} key={location.pathname}>
        {children}
      </main>
      
      <Prompt className="py-36 grid layoutflex items-end mdMax:justify-center md:items-center" />
      <div className="grid layout">
        <Divider className="divider" />
      </div>
      <Profile className="py-36 grid layout flex items-end mdMax:justify-center md:items-center" />
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
