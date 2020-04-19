import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="ux & visual design"
      />
      
      <Hero />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>
        <Link to="/about/">About</Link>
      </section>
    </Layout>
  )
}

export default IndexPage;
