import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";
import Hero from "@components/hero";
import About from "@components/sections/about";

function IndexPage() {
  return (
    <Layout>
      <SEO title="ux & visual design" />
      <Hero />
      <About />
    </Layout>
  )
}

export default IndexPage;
