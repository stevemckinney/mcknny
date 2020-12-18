import React from "react";
import { Link } from "gatsby";

// components
import SEO from "@components/seo";

function DesigningPage() {
  return (
    <React.Fragment>
      <SEO title="Designing in the open" />
      <header className="py-64 mt-8 md:mt-12 lg:mt-16 content">
        <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">Roadmap</h1>
      </header>
      <article className={`content max-w-full`}>
        <h2 className="text-melon mt-0 mb-4">Designing in the open</h2>
        <p className="max-w-xl">This page like much of this website is currently a work in progress. For anyone stumbling across this portfolio, they will likely see a largely complete design. But may find bugs and a lot incomplete bits of content.</p>
        <p className="max-w-xl">It’s not a great reflection—but a busy life leads to slow but steady progress. Over the coming <em>months</em>, I hope to complete more portfolio & content pages, refine the poorer parts of the design and layouts.</p>
        <p className="max-w-xl">Overall leading to a complete portfolio, with messaging that reflects my skill & ability to deliver you a wonderful website, that serves your customers.</p>
        
        <h2 className="text-melon mt-8 mb-4">Tasks</h2>
        <h3 className="mb-0 mb-2 text-f3">General</h3>
        <ul>
          <li>Complete the task list</li>
          <li>Make this page more readable</li>
          <li>Improve site performance</li>
          <li className="mb-4">Complete alt & figcaptions where necessary</li>
        </ul>
        
        <h3 className="mb-0 mb-2 text-f3">Content</h3>
        <ul>
          <li>Complete 8 portfolio case studies</li>
          <li>Choose the final 3 case studies</li>
          <li>Create content for each portfolio</li>
          <li>Create images for each portfolio section</li>
          <li>Complete the about page</li>
          <li>Complete the process page</li>
          <li className="mb-4">Complete the contact page</li>
        </ul>
        
        <h3 className="mb-0 mb-2 text-f3">Design</h3>
        <ul>
          <li>Refine the responsive layout on <Link to="/work/" className="text-jasmine hover:text-sidecar">work</Link> at small screen sizes</li>
          <li>Learn how to use framer motion more effectively</li>
          <li>
            Create a better homepage flow
            <ul>
              <li className="pl-4">Break up the introduction and make it feel less like a text wall</li>
              <li className="pl-4">Feature work better</li>
            </ul>
          </li>
        </ul>
      </article>
    </React.Fragment>
  );
}

export default DesigningPage;
