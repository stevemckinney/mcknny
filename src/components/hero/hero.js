import React from "react";
import PropTypes from "prop-types";
import Action from "@components/content/action";

// style
import styles from "./hero.module.css";

// svg
import Eraser from "@images/eraser.inline.svg";
import Palomino from "@images/palomino.inline.svg";
import Pen from "@images/pen.inline.svg";
import Pencil from "@images/pencil.inline.svg";
import Phone from "@images/phone.inline.svg";
import Posca from "@images/posca.inline.svg";
import Sharpener from "@images/sharpener.inline.svg";

const Hero = props => {
  const heroStyles = `${props.className} ${styles.container} grid sm:layout lg:layout flex mdMax:justify-center items-end md:items-center`;
  const headingStyles = `relative z-10 mb-6 mdMax:leading-tight text-f3 lg:text-headline tracking-headline`;

  return (
    <React.Fragment>
      <section className={heroStyles}>
        <div className={styles.content}>
          <h1 className={headingStyles}>Beautifully usable design your customers have come to expect</h1>
          <Action to="/portfolio/" text="View case studies" />
        </div>
        <Eraser className={`illo ${styles.eraser}`} />
        <Palomino className={`illo ${styles.palomino}`} />
        <Pen className={`illo ${styles.pen}`} />
        <Pencil className={`illo ${styles.pencil}`} />
        <Phone className={`illo ${styles.phone}`} />
        <Posca className={`illo ${styles.posca}`} />
        <Sharpener className={`illo ${styles.sharpener}`} />
      </section>
    </React.Fragment>
  )
}

Hero.propTypes = {
  className: PropTypes.node,
}

export default Hero;
