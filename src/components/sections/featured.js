import React from "react";
import PropTypes from "prop-types";
import Action from "../content/action";

// style
import styles from "./featured.module.css";

const Featured = (props) => {
  const containerStyles = `${styles.container} ${props.className}`;
  const contentStyles = `${styles.content} relative content text-f3`;
  
  return (
    <React.Fragment>
      <aside className={containerStyles}>
        <div className={contentStyles}>
          <header className="flex justify-between">
            <h2 className="text-f1 text-melon content mb-4 content columns-all">Featured projects</h2>
            <Action to="/work/" text="View all projects" />
          </header>
        </div>
      </aside>
    </React.Fragment>
  )
}

Featured.propTypes = {
  className: PropTypes.node,
}


export default Featured;