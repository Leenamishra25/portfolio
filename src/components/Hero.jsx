import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Leena</span>
            <br />
            Full Stack Developer.
          </h1>
          <p className="hero-description">
            I'm a B.Tech CSE 3rd-year student passionate about building real-world applications using modern frameworks and robust backend architectures.
          </p>
          
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Leenamishra25" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/leena-mishra-6a271a290/" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:leenamishra2004@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-glow"></div>
          <img 
            src="/leena.jpg" 
            alt="Leena Mishra" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
