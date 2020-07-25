import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { as, items, className } = props;
  const validLists = ["ul", "ol"];

  const safeList = as ? as.toLowerCase() : "ul";
  const L = validLists.includes(safeList) ? safeList : "ul";

  return (
    <L className={className}>
      {items.map(li => (
        <li key={li.id}>
          {li}
        </li>
      ))}
    </L>
  )
}

List.defaultProps = {
  className: "p-0 m-0 text-remy",
  text: "Find out more"
}

List.propTypes = {
  as: PropTypes.string,
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default List;
