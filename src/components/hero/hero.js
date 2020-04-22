import React from "react";
import Action from "../content/action";

// style
import styles from "./hero.module.css";

// svg
import Eraser from "../../images/eraser.inline.svg";
import Figma from "../../images/figma.inline.svg";
import Illustrator from "../../images/illustrator.inline.svg";
import Palomino from "../../images/palomino.inline.svg";
import Pen from "../../images/pen.inline.svg";
import Pencil from "../../images/pencil.inline.svg";
import Phone from "../../images/phone.inline.svg";
import Ruler from "../../images/ruler.inline.svg";
import Sharpener from "../../images/sharpener.inline.svg";
import Terminal from "../../images/terminal.inline.svg";

const Hero = () => {
  const heroStyles = `${styles.container} relative flex items-end md:items-center`;
  
  return (
    <React.Fragment>
      <section className={heroStyles}>
        <div className={styles.content}>
          <h1 className="text-f3 mdMax:leading-tight lg:text-headline mb-4 md:mb-6"><span className="text-white">Dazzlingly</span> quick websites with <span className="text-white">lovely</span> user focused design</h1>
          <Action to="/portfolio/" text="Find out more" />
        </div>
        
        <Eraser className={`${styles.illo} ${styles.eraser}`} />
        <Figma className={`${styles.illo} ${styles.figma}`} />
        <Palomino className={`${styles.illo} ${styles.palomino}`} />
        <Illustrator className={`${styles.illo} ${styles.illustrator}`} />
        <Pen className={`${styles.illo} ${styles.pen}`} />
        <Pencil className={`${styles.illo} ${styles.pencil}`} />
        <Phone className={`${styles.illo} ${styles.phone}`} />
        <Ruler className={`${styles.illo} ${styles.ruler}`} />
        <Sharpener className={`${styles.illo} ${styles.sharpener}`} />
        <Terminal className={`${styles.illo} ${styles.terminal}`} />
      </section>
    </React.Fragment>
  );
}

export default Hero;