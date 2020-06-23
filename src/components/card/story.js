import React from "react";
import PropTypes from "prop-types";
// import Dump from "@components/dump";

// css
import base from "./card.module.css";

const Story = (props) => {
  const { className, children, style } = props;
  const classNameStory = `card p-16 ${className}`;

  return (
    <React.Fragment>
      {/*<Dump individualProjectProps={props.image.childImageSharp} />*/}
      <article className={`${classNameStory} ${base.card}`} style={style}>
        {children}
      </article>
    </React.Fragment>
  )
}

Story.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  props: PropTypes.node,
  style: PropTypes.object
}

export default Story;
