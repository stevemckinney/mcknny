/* eslint react/prop-types: 0 */
/* eslint import/default: 0 */
import React from "react";

const Anchor = (props) => {
  const { link, text, className } = props;

  return (
    <a href={link} className={className}>{text}</a>
  )
}

export default Anchor;
