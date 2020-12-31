import React from "react";
import PropTypes from "prop-types";
// import Dump from "@components/dump";

// svg
import Xsmall from "@images/phone-xs.inline.svg";
import Small from "@images/phone.inline.svg";
import Medium from "@images/ipad-landscape.inline.svg";
import Large from "@images/desktop.inline.svg";

// css
import styles from "./screen.module.css";

const Screen = ({ className, caption, children, device, scrollable }) => {
  return (
    <React.Fragment>
      {/* <Dump cls={`${styles[device]}-image`} /> */}
      <figure className={`${styles.container} ${className} ${scrollable === true && "scrollable"}`}>
        <div className={`${styles[device]}`}>
          <div className={`${styles.image} absolute`}>
            {children}
          </div>
          { device === "xsmall" && <Xsmall role="presentation" />}
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
  className: "device"
}

Screen.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  device: PropTypes.string.isRequired,
  scrollable: PropTypes.bool
}

export default Screen;
