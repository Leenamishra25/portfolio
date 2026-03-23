import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      title: 'Full Stack Web Development Specialization',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/YCU40Z4AJUT2'
    },
    {
      title: 'Web Development Capstone Project',
      link: 'https://www.coursera.org/account/accomplishments/certificate/WIIP2644IMAP'
    },
    {
      title: 'Server-side Development with NodeJS, Express & MongoDB',
      link: 'https://www.coursera.org/account/accomplishments/certificate/0QYIE700U9OG'
    },
    {
      title: 'Front-End Web Development with React',
      link: 'https://www.coursera.org/account/accomplishments/certificate/8LFCR9OXYF84'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">
          Certifications
        </h2>
        
        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <a href={cert.link} target="_blank" rel="noreferrer" key={idx} className="cert-card glass-card">
              <div className="cert-icon">
                <Award size={28} />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <span className="view-cert">View Credential <ExternalLink size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
