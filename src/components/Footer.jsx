import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Leena Mishra. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
