import React from 'react';
import sectionStyles from './Section.module.css';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={`${sectionStyles.section} ${styles.contact}`}>
      <h2>Contact</h2>
      <p>Harninder Singh</p>
      <p>Phone: 437-484-4639</p>
      <p>Email: <a href="mailto:singhharninder51199@gmail.com">singhharninder51199@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/harnindersingh" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/harnindersingh</a></p>
    </section>
  );
}

export default Contact;