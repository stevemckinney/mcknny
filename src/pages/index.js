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
      <SEO title="ux & visual design" />
      <Hero />
      <About className="py-48 grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center content" />
      <Featured className="py-48 grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center content" />
    </Layout>
  )
}

export default IndexPage;
