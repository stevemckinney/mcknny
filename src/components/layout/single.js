/* eslint react/prop-types: 0 */
import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';

// css
import styles from "./single.module.css";

// components
import SEO from '@components/seo';
import Layout from '@components/layout';
import Action from '@components/content/action';
import Story from '@components/card/story';
import Screen from '@components/screen';

const shortcodes = { Link, Action, Screen, Story } // Provide common components here

export default function Single({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title}/>
      <header className="grid full screen bg-i sm:layout md:layout lg:layout mdMax:justify-center items-end md:items-center relative">
        <div className={styles.content}>
          <h1 className="relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline">{mdx.frontmatter.title}</h1>
        </div>
      </header>
      <article className={`${styles.article} grid full text-f4 sm:layout md:layout lg:layout`}>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        role
        category
        url
      }
    }
  }
`
