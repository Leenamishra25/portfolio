import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card glass-card">
          <h2 className="section-title">
            Get In Touch
          </h2>
          <p className="contact-text">
            I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-links">
            <a href="mailto:leenamishra2004@gmail.com" className="btn btn-primary contact-btn">
              <Mail size={20} /> Say Hello
            </a>
          </div>
          
          <div className="contact-socials">
            <a href="https://github.com/Leenamishra25" target="_blank" rel="noreferrer" className="social-pill">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/leena-mishra-6a271a290/" target="_blank" rel="noreferrer" className="social-pill">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
