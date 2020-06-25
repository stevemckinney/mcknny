import React from "react";
import PropTypes from "prop-types";
// import Dump from "@components/dump";

// svg
import Small from "@images/phone.inline.svg";
import Medium from "@images/ipad-landscape.inline.svg";
import Large from "@images/desktop.inline.svg";

// css
import styles from "./screen.module.css";

const Screen = ({ caption, children, device }) => {
  return (
    <React.Fragment>
      {/* <Dump cls={`${styles[device]}-image`} /> */}
      <figure className={`${styles.container}`}>
        <div className={`${styles[device]}`}>
          <div className={`${styles.image} absolute`}>
            {children}
          </div>
          { device === "small" && <Small role="presentation" />}
          { device === "medium" && <Medium role="presentation" />}
          { device === "large" && <Large role="presentation" />}
        </div>
        {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
      </figure>
    </React.Fragment>
  )
}

Screen.defaultProps = {
  device: "small",
}

Screen.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
  device: PropTypes.string.isRequired,
}

export default Screen;
