import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";

// sections
import Hero from "@components/hero";
import About from "@components/sections/about";
import Featured from "@components/sections/featured";

function IndexPage() {
  return (
    <Layout>
      <SEO title="ux &amp; visual design" />
      <Hero className="screen bg-i" />
      <About className="py-36 screen grid content flex items-end mdMax:justify-center md:items-center" />
      <Featured className="grid content flex" />
    </Layout>
  )
}

export default IndexPage;
