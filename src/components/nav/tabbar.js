import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styles from "./tabbar.module.css";

// icons
import Home from "../../images/icon/home.inline.svg";
import Portfolio from "../../images/icon/portfolio.inline.svg";
import About from "../../images/icon/about.inline.svg";
import Contact from "../../images/icon/contact.inline.svg";

const Tabbar = ({ logo, links }) => {
  const navStyles = `${styles.tabbar} fixed bottom-0 right-0 left-0 flex bg-madison md:hidden`;
  const linkStyles = `${styles.link} flex flex-col items-center flex-1 text-f8 font-bold no-underline`;
  
  return (
    <React.Fragment>
      <nav className={navStyles}>
        <Link to="/" className={linkStyles}>
          <Home />
          {logo}
        </Link>
        {links.map(link => (
          <Link className={linkStyles} key={link.title} to={link.route}>
            {link.title === "portfolio" && <Portfolio />}
            {link.title === "blog" && <Portfolio />}
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
