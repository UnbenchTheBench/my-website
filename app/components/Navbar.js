"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : styles.navbarDefault}`}>
      <div className={styles.container}>
        {/* Logo / Name */}
        <Link 
          href="/" 
          className={styles.logo}
        >
          Benchy Dutreuil
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link 
            href="#about" 
            className={styles.desktopMenuItem}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={styles.desktopMenuItem}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className={styles.desktopMenuItem}
          >
            Skills
          </Link>
          <Link 
            href="/contact" 
            className={styles.desktopMenuItem}
          >
            Contact
          </Link>
        </div>

        {/* Tablet Menu (simplified) */}
        <div className={styles.tabletMenu}>
          <Link 
            href="/projects" 
            className={styles.tabletMenuItem}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className={styles.tabletMenuItem}
          >
            Skills
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={styles.hamburgerIcon}>
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLine1Open : styles.hamburgerLine1}`}></span>
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLine2Open : styles.hamburgerLine2}`}></span>
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLine3Open : styles.hamburgerLine3}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileDropdown} ${isOpen ? styles.mobileDropdownOpen : styles.mobileDropdownClosed}`}>
        <div className={styles.mobileMenu}>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className={styles.mobileMenuItem}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setIsOpen(false)} 
            className={styles.mobileMenuItem}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            onClick={() => setIsOpen(false)} 
            className={styles.mobileMenuItem}
          >
            Skills
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className={styles.mobileMenuItem}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
