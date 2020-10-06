import React from "react";

// components
import Projects from "@components/content/projects";

const WorkPage = () => {
  return (
    <React.Fragment>
      <header className="py-64 lg:mt-16 content">
        <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">Work</h1>
      </header>
      <section className={`grid content grid-cols-10 col-gap-16 row-gap-0`}>
        <Projects />
      </section>
    </React.Fragment>
  )
}

export default WorkPage;
