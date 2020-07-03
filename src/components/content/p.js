import React from "react";
import PropTypes from "prop-types";

const P = props => {
  const { children, className } = props;

  return (
    <p className={className}>{children}</p>
  );
}

P.defaultProps = {
  className: "c-p",
}

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default P;
