import React from "react";
import PropTypes from "prop-types";

export default function Scroll({ children }) {
  return (
    <div className="full">
      {children}
    </div>
  )
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}
