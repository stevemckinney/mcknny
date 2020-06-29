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
  const heroStyles = `${props.className} ${styles.container} grid layout mdMax:justify-center items-end md:items-center relative`;
  const headingStyles = `relative z-10 mb-2 md:mb-6 text-f4 md:text-f3 lg:text-headline lg:tracking-headline`;

  return (
    <React.Fragment>
      <section className={`${heroStyles} z-10 relative`}>
        <div className={`${styles.content} z-10`}>
          <h1 className={headingStyles} dangerouslySetInnerHTML={{ __html:`Beautifully usable design your&nbsp;customers&nbsp;have come&nbsp;to&nbsp;expect` }}/>
          <Action to={props.link} text="View case studies" />
        </div>
        {/* style={{ marginBottom: "-120px", paddingBottom: "120px" }} */}
        <div className={`absolute inset-0 z-0 overflow-hidden`}>
          <Eraser className={`illo ${styles.eraser}`} />
          <Palomino className={`illo ${styles.palomino}`} />
          <Pen className={`illo ${styles.pen}`} />
          <Pencil className={`illo ${styles.pencil}`} />
          <Phone className={`illo ${styles.phone}`} />
          <Posca className={`illo ${styles.posca}`} />
          <Sharpener className={`illo ${styles.sharpener}`} />
        </div>
      </section>
    </React.Fragment>
  )
}

Hero.propTypes = {
  className: PropTypes.node,
  link: PropTypes.string.isRequired,
}

export default Hero;
