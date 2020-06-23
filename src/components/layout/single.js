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
import Bullet from '@components/content/bullet';
import H from '@components/content/h';
import List from '@components/content/list';
import P from '@components/content/p';
import Story from '@components/card/story';
import Screen from '@components/screen';

const shortcodes = { Link, Action, Screen, Story, P, H, List } // Provide common components here

export default function Single({ data: { mdx } }) {
  const {
    url,
    role,
    category,
    introduction,
    title,
    description } = mdx.frontmatter;

  function createSeparator() {
    return {__html: '/'};
  }

  return (
    <Layout>
      <SEO title={title}/>
      <header className="grid full screen bg-i sm:layout md:layout lg:layout mdMax:justify-center items-end md:items-center relative">
        <div className={`${styles.content} col-span-5 col-start-4`}>
          <a href={url} className="mb-4 text-f8 text-melon uppercase tracking-title font-title font-bold">{url.replace("https://", "")}</a>
          <h1 className="relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline">{description}</h1>
        </div>
        <div className="col-span-7">
          <ul className={`m-0 p-0 flex mb-4 text-f8 text-pearl uppercase tracking-title font-title font-bold gap-4`}>
            <li className="text-melon">Role</li>
            {role.map((role, i) => [
              <React.Fragment key={role.id}>
                <li>
                  {role}
                  {i < role.length - 1 ? <span dangerouslySetInnerHTML={createSeparator()}/> : ``}
                </li>
              </React.Fragment>
            ])}
            <li><Bullet className="bg-madison" /></li>
            <li className="text-melon">Type</li>
            {category.map((category, i) => [
              <React.Fragment key={category.id}>
                <li>
                  {category}
                  {i < role.length - 1 ? <span dangerouslySetInnerHTML={createSeparator()}/> : ``}
                </li>
              </React.Fragment>
            ])}
          </ul>
          {introduction.map(p => (
            <p key="p.id" className="text-f4">{p}</p>
          ))}
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
        description
        role
        category
        url
        introduction
      }
    }
  }
`
