import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// components
import Header from "@components/header";
import Footer from "@components/footer";

// animation
const duration = .4

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }


function Layout({ className, children }) {
  const layoutClass = `bg`;

  return (
    <React.Fragment>
      <Helmet key="head" bodyAttributes={{ class: layoutClass }}>
        <link rel="preconnect" href="https://typekit.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
      </Helmet>

      <Header className="header" />

      <AnimatePresence exitBeforeEnter>
        <motion.main
          className={className}
          key={props.location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>

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
}

export default Layout;
