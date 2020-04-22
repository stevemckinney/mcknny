import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styles from "./nav.module.css";

const Nav = ({ links }) => {
  const navStyles = `${styles.nav} flex mdMax:w-full md:justify-end`;
  const linkStyles = `${styles.link} mdMax:flex-1 mdMax:text-center no-underline inline-block text-f7 md:text-f5 font-bold py-8`;
  
  return (
    <React.Fragment>
      <nav className={navStyles}>
        {links.map(link => (
          <Link className={linkStyles} key={link.title} to={link.route}>
            {link.title}
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
