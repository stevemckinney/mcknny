import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { motion } from "framer-motion";

// css
import styles from "./nav.module.css";

const Nav = ({ links }) => {
  const navStyles = `${styles.nav} mdMax:hidden flex justify-end font-title`;
  const linkStyles = `${styles.link} no-underline inline-block text-f8 md:text-f6 font-medium hover:text-jasmine py-8`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .125,
        staggerDirection: -1,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }


  return (
    <React.Fragment>
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className={navStyles}
      >
        {links.map(link => (
          <Link className={linkStyles} partiallyActive={true} activeClassName="text-jasmine" key={link.title} to={link.route}>
            <motion.span variants={item} size={50}>{link.title}</motion.span>
          </Link>
        ))}
      </motion.nav>
    </React.Fragment>
  )
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
}

export default Nav;
