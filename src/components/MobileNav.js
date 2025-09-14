"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.css';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and X icons

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobile_nav}>
      <button onClick={toggleMenu} className={styles.menu_button}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <nav className={styles.nav_menu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}