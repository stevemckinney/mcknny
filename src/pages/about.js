import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <section className="content text-f4">
        <header className="py-64 mt-24 content">
          <h1 className="relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline">About</h1>
        </header>
        <p>Work in progress…</p>
      </section>
    </Layout>
  );
}

export default AboutPage;
