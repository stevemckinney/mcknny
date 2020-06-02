import React from "react";
import PropTypes from "prop-types";

// style
import styles from "./about.module.css";

const About = (props) => {
  const containerStyles = `${styles.container} ${props.className} py-48`;
  const contentStyles = `${styles.content} content columns-two columns-gutter text-f3`;
  
  return (
    <React.Fragment>
      <aside className={containerStyles}>
        <div className={contentStyles}>
          <h2 className="text-f1 text-melon content mb-8 content columns-all"><span className="block text-f5 text-pearl font-title font-medium pb-2">Hi there, I’m Steve…</span> I’m a designer who codes</h2>
          <p className="mb-8">I enjoy the visual side of design from illustration to typography and I aim to let that shine through. But that shouldn’t come at the expense of slow load times. A fast loading website has a massive impact on the experience and trust a someone has with your brand.</p>
          <p className="mb-8">That’s why code is a part of my workflow. I can understand things from both points of view. Which allows me to communicate ideas better, prototype & refine interactions.</p>
          <p className="mb-0">I’m able to focus on the detail all throughout the process. Beautifully harmonious design, with load times your visitors expect.</p>
        </div>
      </aside>
    </React.Fragment>
  )
}

About.propTypes = {
  className: PropTypes.node,
}


export default About;