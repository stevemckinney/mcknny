import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// css
import styles from "./tabbar.module.css";

// icons
import Home from "@icons/home.inline.svg";
import Portfolio from "@icons/portfolio.inline.svg";
import About from "@icons/about.inline.svg";
import Contact from "@icons/contact.inline.svg";

const Tabbar = ({ links }) => {
  const navStyles = `${styles.tabbar} z-50 fixed bottom-0 right-0 left-0 flex justify-center md:hidden w-screen`;
  const linkStyles = `${styles.link} flex flex-col items-center text-f8 font-bold text-pearl no-underline`;

  return (
    <React.Fragment>
      <nav className={navStyles}>
        <Link to="/" className={linkStyles} activeClassName="text-jasmine">
          <Home />
          home
        </Link>
        {links.map(link => (
          <Link className={linkStyles} key={link.title} to={link.route} activeClassName="text-jasmine" partiallyActive={true}>
            {link.title === "home" && <Home />}
            {link.title === "work" && <Portfolio />}
            {link.title === "about" && <About />}
            {link.title === "contact" && <Contact />}
            {link.title}
          </Link>
        ))}
      </nav>
    </React.Fragment>
  )
}

Tabbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Tabbar;
