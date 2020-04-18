import React from "react";
import { Link } from "gatsby";

import styles from "./hero.module.css";

const Hero = () => {  
  return (
    <section className={styles.hero}>
      <h1 className="f5"><span className="text-white">Dazzlingly</span> quick websites with <span className="text-white">lovely</span> user focused design</h1>
      <Link to="/portfolio">That’s what I need</Link>
    </section>
  );
}

export default Hero;