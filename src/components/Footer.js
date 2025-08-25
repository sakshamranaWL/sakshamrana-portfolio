import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <button className="back-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </button>
          <p>&copy; 2025 Saksham Rana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
