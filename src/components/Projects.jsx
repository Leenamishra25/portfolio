import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Job Portal',
      description: 'A comprehensive job portal platform designed to connect job seekers with employers smoothly. Features advanced search, user dashboards, and application tracking.',
      image: null,
      gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      icon: '💼',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Leenamishra25/Smart-Job-Portal',
      demo: '#'
    },
    {
      title: 'Real-Time Chat App',
      description: 'An interactive real-time messaging application allowing users to connect instantly across distinct rooms, with live typing status and message histories.',
      image: '/chat_app.png',
      gradient: null,
      icon: null,
      tech: ['Socket.io', 'Node.js', 'React', 'Tailwind'],
      github: 'https://github.com/Leenamishra25/Real-Time-Chat-App',
      demo: '#'
    },
    {
      title: 'Gym Workout Tracker',
      description: 'A personal fitness application to log exercises, track progress over time, and visualize workout statistics through a clean, intuitive dashboard.',
      image: '/workout_tracker.png',
      gradient: null,
      icon: null,
      tech: ['MERN Stack', 'Chart.js', 'CSS3'],
      github: 'https://github.com/Leenamishra25/Gym-Workout-Tracker',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
             <div className="project-card glass-card" key={project.title}>
               <div className="project-image">
                 {project.image ? (
                   <img src={project.image} alt={project.title} />
                 ) : (
                   <div className="project-image-placeholder" style={{ background: project.gradient }}>
                     <span className="project-placeholder-icon">{project.icon}</span>
                   </div>
                 )}
                 <div className="project-overlay">
                   <div className="project-links">
                     <a href={project.github} target="_blank" rel="noreferrer" className="icon-link">
                       <Github size={22} />
                     </a>
                   </div>
                 </div>
               </div>
               <div className="project-content">
                 <h3>{project.title}</h3>
                 <p className="project-description">{project.description}</p>
                 <div className="project-tech">
                   {project.tech.map((tech) => (
                     <span key={tech} className="tech-tag">{tech}</span>
                   ))}
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
