import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image';
// import Dump from "@components/dump";

// svg
import Phone from "@images/phone.inline.svg";

// css
import styles from "./phone.module.css";

const Phone = ({ props }) => {
  return (
    <React.Fragment>
      {/*<Dump individualPhoneProps={props.image.childImageSharp} />*/}
      <figure className={`${styles.phone}`}>
        <Img fluid={props.image.childImageSharp.fluid} className="mb-8" />

        {props.description !== "" && <figcaption>{props.description}</figcaption>}
      </figure>
    </React.Fragment>
  )
}

Phone.propTypes = {
  image: PropTypes.node,
  props: PropTypes.node,
}

export default Phone;
