import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// components
import Layout from "@components/layout";
import SEO from "@components/seo";
// const shortcodes = { Link } // Provide common components here
import Dump from "@components/dump";

// css
import styles from "./single.module.css";

// hooks
const Single = ({ data: { mdx: page } }) => {
  const {
    title,
    description,
    category,
    role,
    url
  } = page.frontmatter;
  const body = page;

  return (
    <Layout>
      <SEO title={title} />
      <header className="screen full bg-i grid sm:layout md:layout lg:layout flex mdMax:justify-center items-end md:items-center relative">
        <Dump data={page} />
        <div className="content">
          {url !== "" && <Link to="{url}">{url.replace("https", "")}</Link>}
          <h1>{description}</h1>
          {category}
          {role}
        </div>
      </header>
      <section className={`${styles.content} grid content text-f4`}>
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
        description
        date(formatString: "YYYY")
        role
        category
        url
      }
    }
  }
`;

Single.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Single;
