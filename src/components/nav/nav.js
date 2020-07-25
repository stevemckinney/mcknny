import React from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// css
import styles from "./nav.module.css";

const Nav = ({ links }) => {
  const navStyles = `${styles.nav} mdMax:hidden flex justify-end font-title`;
  const linkStyles = `${styles.link} no-underline inline-block text-f8 md:text-f6 font-medium py-8`;

  return (
    <React.Fragment>
      <nav className={navStyles}>
        {links.map(link => (
          <AniLink
            cover
            bg="#1A2D3D"
            direction="left"
            className={linkStyles} activeClassName="text-jasmine" key={link.title}
            to={link.route}
          >
            {link.title}
          </AniLink>
        ))}
      </nav>
    </React.Fragment>
  )
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
}

export default Nav;
