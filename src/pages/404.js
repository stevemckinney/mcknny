import React from "react";

// components
import SEO from "@components/seo";

function NotFoundPage() {
  return (
    <React.Fragment>
      <SEO title="404: Not found" />
      <header className="py-64 lg:mt-16 content">
        <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">404</h1>
      </header>
      <section className={`grid layout sm:grid-cols-10 full sm:content sm:col-gap-16 sm:row-gap-0`}>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </section>
    </React.Fragment>
  );
}

export default NotFoundPage;
