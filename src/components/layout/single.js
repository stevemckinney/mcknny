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
    role,
    published,
    date,
    category,
    url
  } = context.frontmatter;

  return (
    <Layout>
      <SEO title="{title}" />
      <h1>{title}</h1>
      {children}
    </Layout>
  )
}

export default Single;
