import React from "react";
import PropTypes from "prop-types";

// css
import styles from "./divider.module.css";

const Divider = (props) => {
  return (
    <div className={`${styles.divider} ${props.className}`} />
  )
}

Divider.propTypes = {
  className: PropTypes.node,
}

export default Divider;
