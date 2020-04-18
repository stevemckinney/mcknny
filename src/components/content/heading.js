import React from "react"
import PropTypes from "prop-types"

const Heading = props => {
  return (
    <h1 className="text-headline text-sidecar">{props.text}</h1>
  )
}

Heading.propTypes = {
  text: PropTypes.func.isRequired
};

export default Heading;