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
          <h2 className="mb-6 sm:mb-8 text-f2 sm:text-f1 text-pearl content content columns-all" style={{maxWidth: "580px"}}>
            <span className="block pb-1 sm:pb-2 text-f6 sm:text-f4 text-harp lowercase font-bold font-action">
              Hi there, I’m Steve…
            </span>{" "}
            I design websites that don’t have to be like a pushy salesman
          </h2>
          <p className="mb-4 sm:mb-6">
            You’ve read an article, viewed a product, on the web—more than once or twice—and something feels off. Maybe it’s the amount of time the page had taken to load. Maybe it’s how much your head is moving to compensate for long line lengths.
          </p>
          <p className="mb-4 sm:mb-6">
            Or maybe it’s down to the amount of stuff vying for your attention. Everything from popups, manipulative messaging and other dark patterns. It sends a negative impression—why would you spend time here?
          </p>
          <p className="mb-6 sm:mb-8">
            I know how important it is for you to improve sales, increase newsletter subscribers and the like. However, you can grow for the long term without short term tactics.
          </p>
          <Action to="/work/" text="See the work" />
          <Ruler className={`illo ${styles.ruler}`} />
        </div>
      </section>
    </React.Fragment>
  );
};

About.propTypes = {
  className: PropTypes.node,
};

About.defaultProps = {
  className: "grid screen content py-36",
};

export default About;
