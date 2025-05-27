import React from 'react';
import sectionStyles from './Section.module.css';
import styles from './Header.module.css';

function Header({ onToggleTheme, darkMode }) {
  return (
    <header className={`${sectionStyles.section} ${styles.header}`}>
      <h1>Harninder Singh</h1>
      <div className={styles['contact-info']}>
        437-484-4639 | <a href="mailto:singhharninder51199@gmail.com">singhharninder51199@gmail.com</a> | <a href="https://www.linkedin.com/in/harnindersingh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <button onClick={onToggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;