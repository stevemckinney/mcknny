import React from "react";

// components
import Projects from "@components/content/projects";

const WorkPage = () => {
  return (
    <React.Fragment>
      <SEO title="Work" />
      <header className="py-64 lg:mt-16 content">
        <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">Work</h1>
      </header>
      <section className={`grid layout sm:grid-cols-10 full sm:content sm:col-gap-16 sm:row-gap-0`}>
        <Projects />
      </section>
    </React.Fragment>
  )
}

export default WorkPage;
