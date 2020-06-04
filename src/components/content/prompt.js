import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// css
// import styles from "./prompt.module.css";

// icons
import Glasses from "@images/glasses.inline.svg";

const Prompt = props => {
  const PromptClass = `py-36 relative flex justify-center items-center prompt`;
  
  return (
    <React.Fragment>
      <div className={PromptClass}>
        <Link to={props.to} className="p-8 absolute font-display text-f5 md:text-headline font-bold text-jasmine">
          {props.text}
        </Link>
        <Glasses style={{ marginBottom: "-12px" }} />
      </div>
    </React.Fragment>
  )
}

Prompt.defaultProps = {
  to: "mailto:steve+mcknny@iamsteve.me",
  text: "Let’s work together"
}

Prompt.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Prompt;