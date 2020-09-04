import React from "react";
import PropTypes from "prop-types";
import Layout from "./components/layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

wrapPageElement.propTypes = {
  element: PropTypes.node,
  props: PropTypes.node,
}
