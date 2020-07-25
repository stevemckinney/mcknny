import React from "react";
import PropTypes from "prop-types";

// css
import styles from "./scroll.module.css";

export default function Scroll({ children }) {
  return (
    <div className={`${styles.scroll} full`}>
      {children}
    </div>
  )
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}
