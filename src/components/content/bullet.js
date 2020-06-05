import React from "react";
import PropTypes from "prop-types";

// css
import styles from "./bullet.module.css";

const Bullet = props => {  
  return (
    <React.Fragment>
      <span className={`${styles.container} ${props.className} inline-block`}></span>
    </React.Fragment>
  )
}

Bullet.propTypes = {
  className: PropTypes.node,
}

export default Bullet;