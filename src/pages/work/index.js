import React from "react";
import PropTypes from "prop-types";

// components
import Layout from "@components/layout";
import Projects from "@components/content/projects";

const WorkPage = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <section className={`${props.className} content`}>
          <header className="py-64 mt-24">
            <h1 className="relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline">Work</h1>
          </header>
          <Projects />
        </section>
      </Layout>
    </React.Fragment>
  )
}

WorkPage.propTypes = {
  className: PropTypes.node,
}

export default WorkPage;
