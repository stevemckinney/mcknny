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
  const heroStyles = `${props.className} ${styles.container} grid layout items-center relative`;
  const headingStyles = `relative z-10 mb-2 md:mb-6 text-f4 xxs:text-f3 xs:text-f2 sm:text-f1 lg:text-headline lg:tracking-headline`;

  return (
    <React.Fragment>
      <section className={`${heroStyles}`}>
        <div className={`${styles.content} z-10 relative`}>
          <h1 className={`${headingStyles} ${styles.heading}`} dangerouslySetInnerHTML={{ __html:`Beautifully usable design your&nbsp;customers&nbsp;have come&nbsp;to&nbsp;expect` }}/>
          <Action to={props.link} text="View case studies" />
          <Pen className={`illo md:hidden ${styles.pen}`} role="presentation" />
          <Eraser className={`illo ${styles.eraser}`} role="presentation" />
          <Sharpener className={`illo sm:hidden ${styles.sharpener}`} role="presentation" />
        </div>
        {/* style={{ marginBottom: "-120px", paddingBottom: "120px" }} */}
        <Palomino className={`illo ${styles.palomino}`} role="presentation" />
        <Pencil className={`illo ${styles.pencil}`} role="presentation" />
        <Phone className={`illo ${styles.phone}`} role="presentation" />
        <Posca className={`illo ${styles.posca}`} role="presentation" />
        <Pen className={`illo mdMax:hidden ${styles.pen}`} role="presentation" />
        <Eraser className={`illo lgMax:hidden ${styles.eraser}`} role="presentation" />
        <Sharpener className={`illo smMax:hidden ${styles.sharpener}`} role="presentation" />
      </section>
    </React.Fragment>
  )
}

Hero.propTypes = {
  className: PropTypes.node,
  link: PropTypes.string.isRequired,
}

export default Hero;
