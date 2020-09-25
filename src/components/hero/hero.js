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

const Hero = (props) => {
  const heroStyles = `${props.className} ${styles.container} grid layout items-center relative`;
  const headingStyles = `relative z-10 mb-6 sm:mb-6 font-display leading-title text-f3 xxs:text-f2 sm:text-f1 xxl:text-headline tracking-tight sm:tracking-tighter xxl:tracking-headline`;

  return (
    <React.Fragment>
      <section className={`${heroStyles}`}>
        <div className={`${styles.content} z-10 relative`}>
          <h1
            className={`${headingStyles}`}
            dangerouslySetInnerHTML={{
              __html: `Pretty good design that&nbsp;keeps your readers&nbsp;returning`,
            }}
          />
          <Action to={props.link} text="View case studies" />
        </div>
        <Palomino className={`illo ${styles.palomino}`} role="presentation" />
        <Pencil className={`illo ${styles.pencil}`} role="presentation" />
        <Phone className={`illo ${styles.phone}`} role="presentation" />
        <Posca className={`illo ${styles.posca}`} role="presentation" />
        <Pen className={`illo ${styles.pen}`} role="presentation" />
        <Eraser className={`illo ${styles.eraser}`} role="presentation" />
        <Sharpener className={`illo ${styles.sharpener}`} role="presentation" />
      </section>
    </React.Fragment>
  );
};

Hero.propTypes = {
  className: PropTypes.node,
  link: PropTypes.string.isRequired,
};

export default Hero;
