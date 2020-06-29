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
  const contentStyles = `${styles.content} relative content`;

  return (
    <React.Fragment>
      <aside className={containerStyles}>
        <div className={contentStyles}>
          <Logo className="pb-8" />
          <h2 className={`${styles.title} text-f2 md:text-f1 text-remy content mb-12`}>I’m Steve McKinney, a Manchester based visual & ux designer</h2>
          <h3 className="block text-f6 text-pearl uppercase tracking-title font-title font-medium mb-4">Let’s talk design</h3>
          <ul className="flex xsMax:flex-col font-bold text-f5 p-0 m-0">
            <li className="pr-8">
              <a href="mailto:steve+mcknny@iamsteve.me" className="text-jasmine">Email</a>
            </li>
            <li className="pr-8">
              <a href="https://instagram.com/studiomcknny" className="text-jasmine">Instagram</a>
            </li>
            <li className="pr-8">
              <a href="https://www.behance.net/stevemckinney" className="text-jasmine">Behance</a>
            </li>
            <li className="pr-8">
              <a href="https://twitter.com/irsteve" className="text-jasmine">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/steve-mckinney-5b5836102" className="text-jasmine">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.image} relative`} role="presentation">
          <Figma className={`illo ${styles.figma}`} />
          <Illustrator className={`illo ${styles.illustrator}`} />
          <Pen className={`illo ${styles.pen}`} />
          <Safari className={`illo ${styles.safari}`} />
          <Terminal className={`illo ${styles.terminal}`} />
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
