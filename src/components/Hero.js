import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            🏏⚙️ Code by day, cricket shots by evening!
          </h1>
          <p className="hero-subtitle">I'm <span className="highlight">Saksham Rana</span>, a developer who enjoys building cloud-powered, scalable apps as much as sinking a three-pointer or hitting a cover drive.</p>
          <p className="hero-description">
            For me, both sports and software are about focus, teamwork, and constant improvement.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="btn btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
