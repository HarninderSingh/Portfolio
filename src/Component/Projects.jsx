import React, { useState } from 'react';
import styles from './Projects.module.css';

function Projects({ projects }) {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <section className={styles.projects}>
      <h2>
        Projects
        <button onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? 'Hide' : 'Show'}
        </button>
      </h2>
      {showProjects && (
        <ul>
          {projects.map((project, idx) => (
            <li key={idx}>
              <strong>{project.title}</strong>
              <ul>
                <li>{project.description}</li>
                <li><strong>Tech:</strong> {project.tech}</li>
                <li>{project.details}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Projects;