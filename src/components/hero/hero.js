import React from "react";
import Action from "../content/action";

// style
import styles from "./hero.module.css";

// svg
import Eraser from "@images/eraser.inline.svg";
import Illustrator from "@images/illustrator.inline.svg";
import Palomino from "@images/palomino.inline.svg";
import Pencil from "@images/pencil.inline.svg";
import Phone from "@images/phone.inline.svg";
import Ruler from "@images/ruler.inline.svg";
import Sharpener from "@images/sharpener.inline.svg";
import Safari from "@images/safari.inline.svg";

const Hero = () => {
  const heroStyles = `${styles.container} bg grid mdMax:justify-center sm:layout lg:layout relative flex items-end md:items-center`;
  const headingStyles = `mb-4 mdMax:leading-tight text-f3 lg:text-headline`;
  
  return (
    <React.Fragment>
      <section className={heroStyles}>
        <div className={styles.content}>
          <h1 className={headingStyles}><span className="text-harp">Dazzlingly</span> quick websites with <span className="text-melon">lovely</span> people focused design</h1>
          <Action to="/portfolio/" text="View all projects" />
        </div>
        <Eraser className={`illo ${styles.eraser}`} />
        <Illustrator className={`illo ${styles.illustrator}`} />
        <Palomino className={`illo ${styles.palomino}`} />
        <Pencil className={`illo ${styles.pencil}`} />
        <Phone className={`illo ${styles.phone}`} />
        <Ruler className={`illo ${styles.ruler}`} />
        <Sharpener className={`illo ${styles.sharpener}`} />
        <Safari className={`illo ${styles.safari}`} />
      </section>
    </React.Fragment>
  )
}

export default Hero;