import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './Component/Header';
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Contact from './Component/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    'Java', 'C#', 'JavaScript', 'Bash',
    'Azure', 'AWS',
    'Firebase', 'MySQL', 'Oracle DB2',
    'Agile', 'Design Thinking', 'Change Management Fundamentals',
    'Git/GitHub', 'Docker', 'Postman', 'SQL'
  ];

  const projects = [
    {
      title: 'Smart Attendance Tracker',
      description: 'Mobile-based attendance tracking system for real-time student presence.',
      tech: 'Java | Firebase | Android Studio | XML | Google Authentication',
      details: 'Integrated Google Firebase for authentication and real-time database. UI with Recycler Views for attendance logs and summaries.'
    },
    {
      title: 'Online Bookstore Web App',
      description: 'Secure RESTful APIs for user registration, login, product browsing, and order placement.',
      tech: '.NET | C# | MSSQL | Razor Pages | Docker',
      details: 'Used Entity Framework Core for data management. Containerized with Docker for easy deployment.'
    }
  ];

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Header onToggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;