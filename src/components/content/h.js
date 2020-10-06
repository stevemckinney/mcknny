import React from "react";
import PropTypes from "prop-types";

{/**
  * heading
  * ref: https://dev.to/s_aitchison/psa-stop-hard-coding-heading-levels-in-your-react-components-2ekp
  **/}
const H = props => {
  const { as, children, className } = props;
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const safeHeading = as ? as.toLowerCase() : "";
  const H = validHeadingLevels.includes(safeHeading) ? safeHeading : "h2";

  return (
    <H className={className}>{children}</H>
  );
}

H.defaultProps = {
  className: "heading mb-2 md:mb-4",
}

H.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default H;
