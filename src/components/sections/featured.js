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
        <header className="flex justify-between mb-12 col-span-12">
          <h2 className="text-f3 md:text-f1 text-melon content mb-0 content columns-all">Featured</h2>
          <Action to="/work/" text="View all projects" />
        </header>

        <Projects props={{ classNameProject: "col-span-6" }} />
      </section>
    </React.Fragment>
  )
}

Featured.defaultProps = {
  className: "featured content md:grid grid-cols-12 content gap-16 py-36",
}

Featured.propTypes = {
  className: PropTypes.node,
}

export default Featured;
