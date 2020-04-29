import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Arrow from "../../images/icon/arrow-right-24.inline.svg";

import styles from "./action.module.css";

const Action = props => {
  const actionClass = `relative mdMax:justify-center text-f5 md:text-f3 font-bold text-melon flex items-center action ${styles.action}`;
  
  return (
    <React.Fragment>
      <Link to={props.to} className={actionClass}>
        {props.text}
        <Arrow className="ml-4" />
      </Link>
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