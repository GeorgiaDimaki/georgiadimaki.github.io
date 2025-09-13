"use client";

import { useState, useEffect, useRef } from 'react';

import styles from './Navbar.module.css';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState('ABOUT');
  const observer = useRef(null);
  
  useEffect(() => {

    observer.current = new IntersectionObserver((entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting)?.target;
        if (visibleSection) {
            setActiveLink(visibleSection.id.toUpperCase());
        }
    },{ threshold: 0.5 });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        observer.current.observe(section);
    });

    // cleanup function
    return () => {
        sections.forEach(section => {
            observer.current.current(section);
        });
    };
  }, []);

  return (
    <nav>
      <ul className={styles.nav}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className={activeLink === link.name ? styles.active : ''}>
              <span className={styles.line}></span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}