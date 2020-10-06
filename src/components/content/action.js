import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// css
import styles from "./action.module.css";

// icons
import Arrow from "@icons/arrow-right.inline.svg";

const Action = props => {
  const actionClass = `relative text-f6 sm:text-f5 md:text-f4 font-bold text-jasmine flex items-center action font-body ${styles.action} ${props.className}`;

  return (
    <React.Fragment>
      <Link to={props.to} className={actionClass}>
        {props.text}
        <span className={`sm:bg-madison ml-2 rounded-full sm:w-8 sm:h-8 flex items-center justify-center relative ${styles.icon}`}>
          <Arrow />
        </span>
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
  text: PropTypes.string,
  className: PropTypes.node,
}

export default Action;
