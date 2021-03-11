/* eslint react/prop-types: 0 */
import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';

// debug
// import Dump from "@components/dump";

// css
import styles from "./single.module.css";

// components
import SEO from '@components/seo';
// import TableOfContents from '@components/nav/contents';
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
    service,
    category,
    introduction,
    title,
    description } = mdx.frontmatter;
    
  // const {
  //   tableOfContents
  // } = mdx;

  const headingStyles = `relative z-10 mb-8 sm:mb-6 pr-4 text-f3 xxs:text-f2 md:text-f1`;
  const titleStyles = `block text-f7 md:text-f5 text-patina font-title lowercase mb-1`;

  const createSeparator = function() {
    return {__html: "/"};
  }

  return (
    <React.Fragment>
      <SEO title={title}/>
      {/*<TableOfContents contents={tableOfContents} />*/}
      <header className="grid layout full py-48 md:py-64 lg:py-0 lg:screen lg:screen-rows bg-i relative bg-pattern bg-spruce">
        <div className={`content lg:screen-center lg:col-span-4 lg:col-start-3 xxxl:col-span-5 xxxl:col-start-4`}>
          {url ?
            <a href={url} className={titleStyles}>{title}</a> :
            <span className={titleStyles}>{title}</span>
          }
          <h1 className={headingStyles}>{description}</h1>
        </div>
        <div className={`content max-w-full lg:screen-center lg:col-start-7 lg:col-span-6 xxxl:col-span-7 xxxl:col-start-9`} id={`brief`}>
          <ul className={`mx-0 mt-0 mb-8 sm:mb-4 p-0 flex scroll block text-f7 md:text-f5 font-title lowercase`}>
            <li className="text-melon list-item pr-3 md:pr-4" key="r">Service</li>
            {service.map((name, i) => [
              <React.Fragment key={i}>
                <li className="list-item pr-3 md:pr-4">
                  {name}
                </li>
                {i < service.length - 1 ? <li className="list-item pr-3 md:pr-4"  dangerouslySetInnerHTML={createSeparator()}/> : ``}
              </React.Fragment>
            ])}
            <li className="list-item pr-3 md:pr-4" key="b"><Bullet className="bg-madison" /></li>
            <li className="text-melon list-item pr-3 md:pr-4" key="t">Type</li>
            {category.map((name, i) => [
              <React.Fragment key={i}>
                <li className="list-item pr-3 md:pr-4">
                  {name}
                </li>
                {i < category.length - 1 ? <li className="list-item pr-3 md:pr-4"  dangerouslySetInnerHTML={createSeparator()}/> : ``}
              </React.Fragment>
            ])}
          </ul>
          <div className={`${styles.introduction}`}>
            {introduction.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        
      </header>
      <article className={`single ${styles.article} grid layout full`}>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </React.Fragment>
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
        service
        category
        url
        introduction
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;