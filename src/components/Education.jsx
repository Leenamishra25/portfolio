import React from 'react';
import { Calendar, GraduationCap, Building2 } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      period: '2023 - Present',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Lovely Professional University, Punjab',
      description: 'CGPA: 6.7',
    },
    {
      period: '2021 - 2023',
      degree: 'Intermediate (Class 12)',
      institution: 'The Vivekanand School, Narela, Delhi',
      description: 'Percentage: 81%',
    },
    {
      period: '2020 - 2021',
      degree: 'Matriculation (Class 10)',
      institution: 'Christ Raja Convent School, Jind, Haryana',
      description: 'Percentage: 85%',
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          {educationData.map((edu) => (
            <div className="edu-timeline-card glass-card" key={edu.degree}>
              <div className="edu-timeline-dot"></div>

              <div className="edu-period">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>

              <div className="edu-degree">
                <GraduationCap size={22} />
                <h3>{edu.degree}</h3>
              </div>

              <div className="edu-institution">
                <Building2 size={16} />
                <span>{edu.institution}</span>
              </div>

              <p className="edu-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
