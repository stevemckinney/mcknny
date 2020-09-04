import React from "react";
import PropTypes from "prop-types";
import Action from "../content/action";

// style
import styles from "./about.module.css";

// svg
import Ruler from "@images/ruler.inline.svg";

const About = (props) => {
  const containerStyles = `${props.className}`;
  const contentStyles = `${styles.content} relative content`;

  return (
    <React.Fragment>
      <section className={containerStyles}>
        <div className={contentStyles}>
          <h2 className="text-f3 xxs:text-f2 md:text-f1 tracking-tight sm:tracking-tighter text-harp content mb-5 content columns-all"><span className="block text-f8 md:text-f6 text-pearl uppercase tracking-title font-title font-medium pb-4">Hi there, I’m Steve…</span> I’m a designer who helps your business grow consistently</h2>
          <p className="mb-5">You’ve likely been on a website where something feels off. Maybe it’s the amount of time the page took to load. Maybe you’re browsing—doing your research—but <strong>it feels unnecessarily difficult</strong>.</p>
          <p className="mb-5">It’s likely down to the amount of stuff vying for your attention. Everything from popups, manipulative messaging and other dark patterns. <strong>It doesn’t instil trust</strong>.</p>
          <p className="mb-5">In an impatient world, this isn’t what you want your website to be, right? You want to be guided, not ushered with haste. You can make sales and create repeat business for the long term without resorting to these tactics.</p>
          <Action to="/process/" text="Read my process" />
          <Ruler className={`illo ${styles.ruler}`} />
        </div>
      </section>
    </React.Fragment>
  )
}

About.propTypes = {
  className: PropTypes.node,
}

About.defaultProps = {
  className: "grid screen content py-36",
}

export default About;
