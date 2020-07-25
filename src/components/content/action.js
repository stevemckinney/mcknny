import React from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// css
import styles from "./action.module.css";

// icons
import Arrow from "@icons/arrow-right.inline.svg";

const Action = props => {
  const actionClass = `relative text-f6 md:text-f5 md:text-f3 font-bold text-jasmine flex items-center action ${styles.action}`;

  return (
    <React.Fragment>
      <AniLink
        cover
        bg="#1A2D3D"
        direction="left"
        to={props.to}
        className={actionClass}
      >
        {props.text}
        <span className={`md:bg-madison ml-2 rounded-full md:w-8 md:h-8 flex items-center justify-center relative ${styles.icon}`}>
          <Arrow />
        </span>
      </AniLink>
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
