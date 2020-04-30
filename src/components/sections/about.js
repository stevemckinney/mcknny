import React from "react";

// style
import styles from "./about.module.css";

// svg
import Figma from "@images/figma.inline.svg";
import Pen from "@images/pen.inline.svg";
import Terminal from "@images/terminal.inline.svg";

const Hero = () => {
  const heroStyles = `${styles.container} bg grid mdMax:justify-center sm:layout lg:layout relative flex items-end md:items-center`;
  const headingStyles = `${styles.content} text-f3 mdMax:leading-tight lg:text-headline mb-0`;
  
  return (
    <React.Fragment>
      <section className={heroStyles}>
        <h1 className={headingStyles}>Dazzlingly <span className="text-remy">quick websites with</span> lovely <span className="text-remy">people focused design</span></h1>
        <Figma className={`${styles.illo} ${styles.figma}`} />
        <Terminal className={`${styles.illo} ${styles.terminal}`} />
        <Pen className={`${styles.illo} ${styles.pen}`} />
      </section>
    </React.Fragment>
  )
}

export default Hero;