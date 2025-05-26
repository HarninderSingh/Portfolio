import React from 'react';
import styles from './Header.module.css';

function Header({ onToggleTheme, darkMode }) {
  return (
    <header className={styles.header}>
      <h1>Harninder Singh</h1>
      <button onClick={onToggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;