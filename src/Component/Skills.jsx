import React from 'react';
import styles from './Skills.module.css';

function Skills({ skills }) {
  return (
    <section className={styles.skills}>
      <h2>Key Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;