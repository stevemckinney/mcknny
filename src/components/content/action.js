import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// css
import styles from "./action.module.css";

// icons
import Arrow from "@icons/arrow-right-24.inline.svg";

const Action = props => {
  const actionClass = `relative text-f6 md:text-f5 md:text-f3 font-bold text-jasmine flex items-center action ${styles.action}`;

  return (
    <React.Fragment>
      <Link to={props.to} className={actionClass}>
        {props.text}
        <Arrow className="w-4 ml-2 md:ml-4" style={{marginTop: "4px"}} />
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
