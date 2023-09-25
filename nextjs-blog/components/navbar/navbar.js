// components/Navbar.js
import React, { useState, useEffect } from "react";
import styles from "../../styles/layout.module.css";
import { Link } from "react-scroll";
import "../../pages/index";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolling ? styles.scrolling : ""}`}>
      <div className={styles.navContainer}>
        <Link
          to="home"
          smooth={true}
          duration={500} // Adjust the duration as needed
          className={styles.navLink}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className={styles.navLink}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={styles.navLink}
        >
          Projects
        </Link>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          className={styles.navLink}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
