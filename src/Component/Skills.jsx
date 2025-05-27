import React from 'react';
import sectionStyles from './Section.module.css';
import styles from './Skills.module.css';

function Skills({ skills }) {
  return (
    <section className={`${sectionStyles.section} ${styles.skills}`}>
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