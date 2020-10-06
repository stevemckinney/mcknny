import React from "react";
import PropTypes from "prop-types";

// components
import Action from "@components/content/action";
import Projects from "@components/content/projects";

// style
// import styles from "./featured.module.css";

const Featured = (props) => {
  return (
    <React.Fragment>
      <section className={props.className}>
        <header className="flex justify-between mb-12 col-span-10">
          <h2 className="text-f2 md:text-f1 text-melon content mb-0 content columns-all">
            Projects
          </h2>
          <Action to="/work/" text="View all projects" />
        </header>

        <Projects />
      </section>
    </React.Fragment>
  )
}

Featured.defaultProps = {
  className: "featured grid content grid-cols-1 sm:grid-cols-10 col-gap-16 row-gap-0 mdMax:pt-36",
}

Featured.propTypes = {
  className: PropTypes.node,
}

export default Featured;
