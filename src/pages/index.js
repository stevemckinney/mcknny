import React from "react";
import SEO from "@components/seo";

// sections
import Hero from "@components/hero";
import About from "@components/sections/about";
import Featured from "@components/sections/featured";

function IndexPage() {
  return (
    <React.Fragment>
      <SEO title="ux &amp; visual design" />
      <Hero className="screen bg-i" link="/work/" />
      <About />
      <Featured />
    </React.Fragment>
  )
}

export default IndexPage;
