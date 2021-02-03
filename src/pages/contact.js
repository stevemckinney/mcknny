import React from "react";

// components
import SEO from "@components/seo";

function ContactPage() {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <header className="grid layout full py-48 md:py-64 bg-i relative bg-pattern bg-spruce">
        <div className={`content items-center lg:screen-center lg:col-span-4 lg:col-start-3 xxxl:col-span-5 xxxl:col-start-4`}>
          <h1 className="relative z-10 mb-0 text-f2 xs:text-f1 xxl:text-headline">Contact</h1>
        </div>
      </header>
      <article className={`grid layout full gap-y-8 pt-16`}>
        <p className="text-center content">You can email me at <a href="mailto:hi@mcknny.com" className="text-tumbleweed hover:text-sidecar transition">hi@mcknny.com</a> but feel free to use the contact form.</p>
        <form method="post" action="/success" netlify-honeypot="number" data-netlify="true" name="contact" className="grid grid-cols-1 gap-8 content">
          <input type="hidden" name="number" />
          <input type="hidden" name="form-name" value="contact" />
          
          <fieldset className="border-none m-0 p-0 col-span-1 flex flex-col gap-4">
            <label className="block" htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="input input-text rounded-md px-4 py-4 bg-prussian transition ease-in-out" required />
          </fieldset>
          <fieldset className="border-none m-0 p-0 col-span-1 flex flex-col gap-4">
            <label className="block" htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="input input-text rounded-md px-4 py-4 bg-prussian transition ease-in-out" required />
          </fieldset>
          <fieldset className="border-none m-0 p-0 col-span-1 flex flex-col gap-4">
            <label className="block" htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" className="input input-textarea rounded-md px-4 py-4 bg-prussian transition ease-in-out"></textarea>
          </fieldset>
          
          <button type="submit" className="bg-tumbleweed hover:bg-sidecar text-prussian font-bold font-title lowercase px-4 py-4 rounded-md transition">Send</button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default ContactPage;
