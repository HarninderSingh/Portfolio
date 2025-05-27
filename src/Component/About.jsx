import React from 'react';
import sectionStyles from './Section.module.css';
import styles from './About.module.css';

function About() {
  return (
    <section className={`${sectionStyles.section} ${styles.about}`}>
      <h2>About Me</h2>
      <p>
        Computer Software and Database Development student at Loyalist College with a strong foundation in programming, troubleshooting, and access control systems. Hands-on experience building portfolio projects using modern frameworks such as .NET, Spring Boot, and React.
        Strong communicator with frontline customer service experience as an Electronics Sales Associate at Walmart, demonstrating the ability to explain technical concepts to diverse audiences and work effectively in team environments.
      </p>
      <h3>Education</h3>
      <ul>
        <li>
          <strong>Loyalist College</strong> (Ontario College Graduate Certificate in Computer Software and Database Development)<br />
          GPA: 8.5/10 (April 2024 - December 2025)
        </li>
        <li>
          <strong>GNA University</strong> (Bachelor’s in Computer Science and Engineering)<br />
          GPA: 7.7/10 (August 2019 – June 2023)
        </li>
      </ul>
    </section>
  );
}

export default About;