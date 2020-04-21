import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styles from "./nav.module.css";

const Nav = ({ links }) => (
  <React.Fragment>
    <nav className={styles.nav}>
      {links.map(link => (
        <Link className="no-underline inline-block text-f7 md:text-f5 font-bold py-8 pl-8" key={link.title} to={link.route}>
          {link.title}
        </Link>
      ))}
    </nav>
  </React.Fragment>
);

Nav.propTypes = {
  links: PropTypes.array.isRequired
}

export default Nav;
