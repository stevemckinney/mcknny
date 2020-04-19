import React from "react";
import { Link } from "gatsby";

import styles from "./hero.module.css";

const Hero = () => {  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className="text-f3 lg:text-headline mb-7"><span className="text-white">Dazzlingly</span> quick websites with <span className="text-white">lovely</span> user focused design</h1>
        <Link to="/portfolio" className="text-f4">That’s what I need</Link>
      </div>
    </section>
  );
}

export default Hero;