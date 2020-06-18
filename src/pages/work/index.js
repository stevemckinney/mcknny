import React from "react";

// components
import Layout from "@components/layout";
import Projects from "@components/content/projects";

const WorkPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <header className="py-64 mt-24 content">
          <h1 className="relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline">Work</h1>
        </header>
        <section className={`grid grid-cols-12 content gap-16`}>
          <Projects props={{ classNameProject: "col-span-6" }} />
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default WorkPage;
