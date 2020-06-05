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
      <Hero className="screen bg-i" />
      <About className="py-36 screen grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center content" />
      <Featured className="grid mdMax:justify-center sm:layout lg:layout flex items-end md:items-center content" />
    </Layout>
  )
}

export default IndexPage;
