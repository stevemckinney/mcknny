import React from "react";

// components
import SEO from "@components/seo";

function ContactPage() {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <section className="content text-f4">
        <header className="py-64 lg:mt-16 content">
          <h1 className="relative z-10 mb-0 text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline">Contact</h1>
        </header>
        <p className="text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline text-center"><a href="mailto:hi@mcknny.com" className="block pb-32">You can email me at hi@mcknny.com</a></p>
      </section>
    </React.Fragment>
  );
}

export default ContactPage;
