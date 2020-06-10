import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// components
import Dump from "@components/dump";
import Layout from "@components/layout";
import SEO from "@components/seo";
// const shortcodes = { Link } // Provide common components here

// hooks
const Single = ({ data: { mdx: page } }) => {
  const {
    title,
    description,
    role,
    published,
    date,
    category,
    url
  } = page.frontmatter;
  const { body } = page;

  return (
    <Layout>
      <SEO title={title} />
      <header className="bg-i grid sm:layout md:layout lg:layout flex mdMax:justify-center items-end md:items-center">
        <Dump data={page} />
        <h1>{description}</h1>
        {role}
        {published}
        {date}
        {category}
        {url}
      </header>
      <section className="grid content">
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query projectsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
      }
    }
  }
`;

Single.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Single;
