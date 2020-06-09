import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

// components
import Layout from "@components/layout";
import SEO from "@components/seo";
import { Link } from "gatsby";
const shortcodes = { Link } // Provide common components here

// hooks
const Single = ({ data: { mdx: post } }) => {
  const {
    title,
    description,
    role,
    published,
    date,
    category,
    url
  } = post.frontmatter;
  const { body } = post;

  return (
    <Layout>
      <SEO title={title} />
      <header className="bg-i">
        <h1>{description}</h1>
        {role}
        {published}
        {date}
        {category}
        {url}
      </header>
      <MDXRenderer>{body}{shortcodes}</MDXRenderer>
    </Layout>
  )
}

Single.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Single;
