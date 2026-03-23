import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="about-grid">
          <div className="about-content glass-card animate-fade-in">
            <p>
              Hello! I'm Leena, a third-year B.Tech Computer Science and Engineering student. I have a strong passion for full-stack web development and software engineering.
            </p>
            <p>
              My journey in tech has given me a robust understanding of both frontend and backend technologies, allowing me to build complete, scalable, and user-friendly applications from scratch. I enjoy tackling complex problems and constantly exploring new frameworks to continuously improve my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
