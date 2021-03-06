import React from "react";

// components
import SEO from "@components/seo";

function AboutPage() {
  return (
    <React.Fragment>
      <SEO title="About" />
      <section className="content text-f4">
        <header className="py-64 lg:mt-16 content">
          <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">About</h1>
        </header>
        <p>Work in progress…</p>
      </section>
    </React.Fragment>
  );
}

export default AboutPage;
