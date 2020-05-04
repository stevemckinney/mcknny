import React from "react";

// style
import styles from "./about.module.css";

const About = () => {
  const aboutStyles = `${styles.container} bg-madison grid mdMax:justify-center sm:layout lg:layout relative flex items-end md:items-center py-48`;
  const aboutContentStyles = `${styles.content} columns-two columns-gutter text-f4`;
  
  return (
    <React.Fragment>
      <section className={aboutStyles}>
        <h2 className="text-f1 text-melon content mb-0"><span className="block text-f5 tracking-title uppercase text-pearl font-title font-medium pb-1">Hi there, I’m Steve…</span> I’m a designer who codes</h2>
        <div className={aboutContentStyles}>
          <p>I enjoy the visual side of design from illustration to typography and I aim to let that shine through. But that shouldn’t come at the expense of slow load times. A fast loading website has a massive impact on the experience and trust a someone has with your brand.</p>
          <p>That’s why code is a part of my workflow. I can understand things from both points of view. Which allows me to communicate ideas better, prototype & refine interactions.</p>
          <p>I’m able to focus on the detail all throughout the process. Beautifully harmonious design, with load times your visitors expect.</p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About;