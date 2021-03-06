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
  const heroStyles = `${props.className} ${styles.container} grid layout items-center relative bg-pattern bg-spruce`;
  const headingStyles = `relative z-10 mb-6 sm:mb-6 font-display leading-none text-f2 sm:text-f2.5 md:text-f1 xl:text-headline`;

  return (
    <React.Fragment>
      <section className={`${heroStyles}`}>
        <div className={`${styles.content} z-10 relative`}>
          <h1
            className={`${headingStyles}`}
            dangerouslySetInnerHTML={{
              __html: `Design that keeps you&nbsp;and your customers&nbsp;happy`,
            }}
          />
          <Action to={props.link} text="See the work" />
        </div>
        <style>
        {`
          .status-bar {
            display: none;
          }
        `}
        </style>
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
