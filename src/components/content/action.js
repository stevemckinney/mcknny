import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./action.module.css";

const Action = props => {
  const actionClass = `relative text-f6 md:text-f4 font-bold text-tumbleweed ${styles.action}`;
  
  return (
    <React.Fragment>
      <Link to={props.to} className={actionClass}>{props.text}</Link>
    </React.Fragment>
  )
}

Action.defaultProps = {
  to: "/portfolio/",
  text: "Find out more"
}

Action.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Action;