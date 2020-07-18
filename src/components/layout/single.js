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

const shortcodes = {
  Link,
  Action,
  Screen,
  Story,
  P,
  H,
  List } // Provide common components here

export default function Single({ data: { mdx } }) {
  const {
    url,
    role,
    category,
    introduction,
    title,
    description } = mdx.frontmatter;

  const headingStyles = `relative z-10 mb-2 md:mb-6 text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline`;
  const titleStyles = `mb-4 block text-f9 md:text-f8 text-melon uppercase tracking-title font-title font-bold`;

  function createSeparator() {
    return {__html: '/'};
  }

  return (
    <Layout>
      <SEO title={title}/>
      <header className="grid layout full py-48 md:py-64 lg:py-0 lg:screen lg:screen-rows bg-i relative">
        <div className={`content lg:screen-center lg:col-span-4 lg:col-start-3 xxxl:col-span-5 xxxl:col-start-4`}>
          {url ?
            <a href={url} className={titleStyles}>{title}</a> :
            <span className={titleStyles}>{title}</span>
          }
          <h1 className={headingStyles}>{description}</h1>
        </div>
        <div className={`content max-w-full lg:screen-center lg:col-start-7 lg:col-span-6 xxxl:col-span-7 xxxl:col-start-9`}>
          <ul className={`my-0 -mx-4 px-4 p-0 flex scroll mb-4 text-f9 md:text-f8 text-pearl uppercase tracking-title font-title font-bold`}>
            <li className="text-melon list-item pr-3 md:pr-4">Role</li>
            {role.map((name, i) => [
              <React.Fragment key={name.id}>
                <li className="list-item pr-3 md:pr-4">
                  {name}
                </li>
                {i < role.length - 1 ? <li className="list-item pr-3 md:pr-4"  dangerouslySetInnerHTML={createSeparator()}/> : ``}
              </React.Fragment>
            ])}
            <li className="list-item pr-3 md:pr-4"><Bullet className="bg-madison" /></li>
            <li className="text-melon list-item pr-3 md:pr-4">Type</li>
            {category.map((name, i) => [
              <React.Fragment key={name.id}>
                <li className="list-item pr-3 md:pr-4">
                  {name}
                </li>
                {i < category.length - 1 ? <li className="list-item pr-3 md:pr-4"  dangerouslySetInnerHTML={createSeparator()}/> : ``}
              </React.Fragment>
            ])}
          </ul>
          <div className={`${styles.introduction}`}>
          {introduction.map(p => (
            <p key={p.id}>{p}</p>
          ))}
          </div>
        </div>
      </header>
      <article className={`single ${styles.article} grid layout full`}>
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
