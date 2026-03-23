import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import './Skills.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'Python',     logo: `${DEVICON}/python/python-original.svg` },
        { name: 'Java',       logo: `${DEVICON}/java/java-original.svg` },
        { name: 'C++',        logo: `${DEVICON}/cplusplus/cplusplus-original.svg` },
        { name: 'C',          logo: `${DEVICON}/c/c-original.svg` },
        { name: 'JavaScript', logo: `${DEVICON}/javascript/javascript-original.svg` },
        { name: 'HTML5',      logo: `${DEVICON}/html5/html5-original.svg` },
        { name: 'CSS3',       logo: `${DEVICON}/css3/css3-original.svg` },
      ]
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: [
        { name: 'React.js',     logo: `${DEVICON}/react/react-original.svg` },
        { name: 'Vite',         logo: `${DEVICON}/vite/vite-original.svg` },
        { name: 'Tailwind CSS', logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
        { name: 'Redux',        logo: `${DEVICON}/redux/redux-original.svg` },
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js',    logo: `${DEVICON}/nodejs/nodejs-original.svg` },
        { name: 'Express.js', logo: `${DEVICON}/express/express-original.svg`, invert: true },
        { name: 'REST APIs',  logo: null, emoji: '🔗' },
      ]
    },
    {
      title: 'Database & Tools',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', logo: `${DEVICON}/mongodb/mongodb-original.svg` },
        { name: 'MySQL',   logo: `${DEVICON}/mysql/mysql-original.svg` },
        { name: 'Git',     logo: `${DEVICON}/git/git-original.svg` },
        { name: 'GitHub',  logo: `${DEVICON}/github/github-original.svg`, invert: true },
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical Skills
        </h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-card glass-card">
              <div className="skill-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`skill-logo${skill.invert ? ' skill-logo-invert' : ''}`}
                      />
                    ) : (
                      <span className="skill-emoji">{skill.emoji}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
