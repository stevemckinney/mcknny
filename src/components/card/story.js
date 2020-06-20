import React from "react";
import PropTypes from "prop-types";
// import Dump from "@components/dump";

// css
import base from "./card.module.css";

const Story = ({ className, children }) => {
  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={props.image.childImageSharp} />*/}
      <article className={`${base.card} ${className}`}>
        {children}
      </article>
    </React.Fragment>
  )
}

Story.defaultProps = {
  className: "auto-fit"
};


Story.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Story;
