import React from "react";
import { Link } from "gatsby";

// components
import SEO from "@components/seo";

function DesigningPage() {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <header className="full py-48 md:py-64 mb-16 bg-i relative text-center">
        <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline px-16">Designing in the&nbsp;open</h1>
      </header>
      <article className={`content max-w-full`}>
        <div style={{ maxWidth: "640px", margin: "auto" }}>
          <p>This page like much of this website is currently a work in progress. For anyone stumbling across this portfolio, they will likely see a largely complete design. But may find bugs and a lot incomplete bits of content.</p>
          <p>It’s not a great reflection—but a busy life leads to slow but steady progress. Over the coming <em>months</em>, I hope to complete more portfolio & content pages, refine the poorer parts of the design and layouts.</p>
          <p>Overall leading to a complete portfolio, with messaging that reflects my skill & ability to deliver you a wonderful website, that serves your customers.</p>
        </div>
        <h2 className="text-melon mt-8">Tasks</h2>
        <ul>
          <li>
            <h3>General</h3>
            <ul>
              <li>Complete the task list</li>
              <li>Make this page more readable</li>
              <li>Improve site performance</li>
              <li>Complete alt & figcaptions where necessary</li>
            </ul>
          </li>
          <li>
            <h3>Content</h3>
            <ul>
              <li>Complete 8 portfolio case studies</li>
              <li>Choose the final 3 case studies</li>
              <li>Create content for each portfolio</li>
              <li>Create images for each portfolio section</li>
              <li>Complete the about page</li>
              <li>Complete the process page</li>
              <li>Complete the contact page</li>
            </ul>
          </li>
          <li>
            <h3>Design</h3>
            <ul>
              <li>Refine the responsive layout on <Link to="/work/" className="text-jasmine hover:text-sidecar">work</Link> at small screen sizes</li>
              <li>Figure out how to add in better page transitions and animations</li>
            </ul>
          </li>
        </ul>
      </article>
    </React.Fragment>
  );
}

export default DesigningPage;
