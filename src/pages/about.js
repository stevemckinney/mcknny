import React from "react";

// components
import SEO from "@components/seo";

function AboutPage() {
  return (
    <React.Fragment>
      <SEO title="About" />
      <section className="content text-f4">
        <header className="py-64 lg:mt-16 content">
          <h1 className="relative z-10 mb-0 text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline">About</h1>
        </header>
        <p>Work in progress…</p>
      </section>
    </React.Fragment>
  );
}

export default AboutPage;
