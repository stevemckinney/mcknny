import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import styles from "./hero.module.css";

const Hero = props => {
  const { title, link  } = props;
  
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      <Link
        to="{link.to}"
        activeStyle={{ color: "red" }}
        partiallyActive={true}
      >
        {link.title}
      </Link>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};

export default Hero;