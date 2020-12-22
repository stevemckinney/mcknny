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
        <header className="content sm:full flex justify-between items-center content-center mb-12 md:mb-20">
          <h2 className="text-f2 md:text-f1 text-harp content mb-0 content columns-all">
            Projects
          </h2>
          <Action to="/work/" text="View all projects" className="mt-2" />
        </header>

        <Projects />
      </section>
    </React.Fragment>
  )
}

Featured.defaultProps = {
  className: "featured grid layout sm:grid-cols-10 full sm:content sm:col-gap-16 sm:row-gap-0 mdMax:pt-32",
}

Featured.propTypes = {
  className: PropTypes.node,
}

export default Featured;
