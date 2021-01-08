import React from "react";
import PropTypes from "prop-types";

// components
import Link from "@components/link";

// css
import styles from "./prompt.module.css";

// illustration
import Glasses from "@images/glasses.inline.svg";

const Prompt = props => {
  const promptClass = `py-36 relative flex justify-center items-center prompt`;

  return (
    <React.Fragment>
      <div className={promptClass}>
        <Link
          to={props.to}
          className="p-8 absolute z-10 block transition font-display text-center leading-none text-f2 sm:text-f1 xl:text-headline font-bold text-jasmine hover:text-melon transition duration-200"
        >
          {props.text}
        </Link>
        <Glasses className={`${styles.glasses} flex-none`} style={{ marginBottom: "-12px" }} />
      </div>
    </React.Fragment>
  )
}

Prompt.defaultProps = {
  to: "mailto:hi@mcknny.com",
  text: "Let’s work together"
}

Prompt.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Prompt;
