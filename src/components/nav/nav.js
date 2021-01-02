import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// css
import styles from "./nav.module.css";

const Nav = ({ links }) => {
  const navStyles = `${styles.nav} mdMax:hidden flex justify-end font-title`;
  const linkStyles = `${styles.link} no-underline inline-block text-f8 md:text-f6 font-medium hover:text-jasmine py-8`;

  return (
    <React.Fragment>
      <nav className={navStyles}>
        {links.map(link => (
          <Link className={linkStyles} partiallyActive={true} activeClassName="text-jasmine" key={link.title} to={link.route}>
            <span size={50}>{link.title}</span>
          </Link>
        ))}
      </nav>
    </React.Fragment>
  )
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
}

export default Nav;
