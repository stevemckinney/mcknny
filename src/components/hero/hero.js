import React from "react";
import Action from "../content/action";

// style
import styles from "./hero.module.css";

// svg
import Eraser from "../../images/eraser.inline.svg";
/*
import Figma from "../../images/figma.inline.svg";
<Figma className={`${styles.illo} ${styles.figma}`} />
import Illustrator from "../../images/illustrator.inline.svg";
<Illustrator className={`${styles.illo} ${styles.illustrator}`} />
*/
import Palomino from "../../images/palomino.inline.svg";
import Pen from "../../images/pen.inline.svg";
import Pencil from "../../images/pencil.inline.svg";
import Phone from "../../images/phone.inline.svg";
import Ruler from "../../images/ruler.inline.svg";
import Sharpener from "../../images/sharpener.inline.svg";
/*
import Terminal from "../../images/terminal.inline.svg";
<Terminal className={`${styles.illo} ${styles.terminal}`} />
*/

const Hero = () => {
  const heroStyles = `${styles.container} bg grid mdMax:justify-center sm:layout lg:layout relative flex items-end md:items-center`;
  const headingStyles = `${styles.content} text-f3 mdMax:leading-tight lg:text-headline mb-0`;
  
  return (
    <React.Fragment>
      <section className={heroStyles}>
        <h1 className={headingStyles}>Dazzlingly <span className="text-remy">quick websites with</span> lovely <span className="text-remy">user focused design</span></h1>
        <Action to="/portfolio/" text="View all projects" />
        
        <Eraser className={`${styles.illo} ${styles.eraser}`} />
        <Palomino className={`${styles.illo} ${styles.palomino}`} />
        <Pen className={`${styles.illo} ${styles.pen}`} />
        <Pencil className={`${styles.illo} ${styles.pencil}`} />
        <Phone className={`${styles.illo} ${styles.phone}`} />
        <Ruler className={`${styles.illo} ${styles.ruler}`} />
        <Sharpener className={`${styles.illo} ${styles.sharpener}`} />
      </section>
    </React.Fragment>
  )
}

export default Hero;