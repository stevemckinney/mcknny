import React from "react";

// components
import SEO from "@components/seo";

function ContactPage() {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <section className="content text-f4">
        <header className="py-64 lg:mt-16 content">
          <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">Contact</h1>
        </header>
        <p className="text-f3 text-center"><a href="mailto:hi@mcknny.com" className="block pb-32">Thanks for your message, I will get back to you shortly.</a></p>
      </section>
    </React.Fragment>
  );
}

export default ContactPage;
