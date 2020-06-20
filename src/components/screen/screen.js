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
      {/*<Dump individualPhoneProps={props.image.childImageSharp} />*/}
      <figure className={`${styles.screen}`}>
        {children}
        { device === "small" && <Small />}
        { device === "medium" && <Medium />}
        { device === "large" && <Large />}
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
