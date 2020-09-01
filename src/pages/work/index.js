import React from "react";

// components
import Projects from "@components/content/projects";

const WorkPage = () => {
  return (
    <React.Fragment>
      <header className="py-64 lg:mt-16 content">
        <h1 className="relative z-10 mb-0 text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline">Work</h1>
      </header>
      <section className={`grid grid-cols-1 md:grid-cols-12 content col-gap-16 row-gap-16`}>
        <Projects />
      </section>
    </React.Fragment>
  )
}

export default WorkPage;
