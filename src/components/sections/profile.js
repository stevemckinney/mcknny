import React from "react";
import PropTypes from "prop-types";

// style
import styles from "./profile.module.css";

// svg
import Safari from "@images/safari.inline.svg";
import Illustrator from "@images/illustrator.inline.svg";
import Terminal from "@images/terminal.inline.svg";
import Figma from "@images/figma.inline.svg";
import Pen from "@images/pen.inline.svg";

const Profile = (props) => {
  const containerStyles = `${styles.container} ${props.className}`;
  const contentStyles = `${styles.content} relative content text-f3`;
  
  return (
    <React.Fragment>
      <aside className={containerStyles}>
        <div className={contentStyles}>
          <h2 className="text-f1 text-melon content mb-4 content columns-all">I’m Steve McKinney, a Manchester based visual & ux designer</h2>
          <Figma />
          <Illustrator />
          <Pen />
          <Safari />
          <Terminal />
        </div>
      </aside>
    </React.Fragment>
  )
}

Profile.propTypes = {
  className: PropTypes.node,
}


export default Profile;