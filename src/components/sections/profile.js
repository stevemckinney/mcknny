import React from "react";
import PropTypes from "prop-types";

// components
import Logo from "@components/nav/logo";

// style
import styles from "./profile.module.css";

// svg
import Safari from "@images/safari.inline.svg";
import Illustrator from "@images/illustrator.inline.svg";
import Terminal from "@images/terminal.inline.svg";
import Figma from "@images/figma.inline.svg";
import Pen from "@images/pen.inline.svg";

const Profile = (props) => {
  const containerStyles = `${props.className} ${styles.container}`;
  const contentStyles = `${styles.content} relative`;
  function setTitle() {
    return {
      __html: `I’m Steve McKinney, a&nbsp;Manchester based visual&nbsp;&amp; ux&nbsp;designer`
    }
  }

  return (
    <React.Fragment>
      <aside className={containerStyles}>
        <div className={contentStyles}>
          <Logo className="pb-8" />
          <h2 className={`${styles.title} text-f3 xxs:text-f2 md:text-f1 tracking-tight sm:tracking-tighter text-remy content mb-12`} dangerouslySetInnerHTML={setTitle()} />
          <h3 className="block text-f7 md:text-f5 text-pearl uppercase tracking-title font-title font-medium mb-4">Let’s talk design</h3>
          <ul className="flex mdMax:flex-col font-bold text-f6 md:text-f5 p-0 m-0">
            <li className="pr-8">
              <a href="mailto:hi@mcknny.com" className="text-jasmine hover:text-sidecar">Email</a>
            </li>
            {<li className="pr-8">
              <a href="https://instagram.com/studiomcknny" className="text-jasmine hover:text-sidecar">Instagram</a>
            </li>}
            <li className="pr-8">
              <a href="https://www.behance.net/stevemckinney" className="text-jasmine hover:text-sidecar">Behance</a>
            </li>
            <li className="pr-8">
              <a href="https://twitter.com/irsteve" className="text-jasmine hover:text-sidecar">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/steve-mckinney-5b5836102" className="text-jasmine hover:text-sidecar">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.image} relative`} role="presentation">
          <Figma className={`illo ${styles.figma}`} />
          <Illustrator className={`illo ${styles.illustrator}`} />
          <Pen className={`illo ${styles.pen} mdMax:hidden`} />
          <Safari className={`illo ${styles.safari}`} />
          <Terminal className={`illo ${styles.terminal} xlMax:hidden`} />
        </div>
      </aside>
    </React.Fragment>
  )
}

Profile.defaultProps = {
  className: `profile`,
}

Profile.propTypes = {
  className: PropTypes.node,
}

export default Profile;
