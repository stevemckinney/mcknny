import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

// components
import Layout from "@components/layout";
import SEO from "@components/seo";
import { Link } from "gatsby";
const shortcodes = { Link } // Provide common components here

// hooks
const Single = ({ children, context, data: { mdx } }) => {
  const {
    title,
    description,
    role,
    published,
    date,
    category,
    url
  } = context.frontmatter;

  return (
    <Layout>
      <SEO title="{title}" />
      <header>
        <h1>{description}</h1>
      </header>
      {children}
    </Layout>
  )
}

Single.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Single;
