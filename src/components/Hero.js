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
            Hi, I'm <span className="highlight">Saksham Rana</span>
          </h1>
          <p className="hero-subtitle">Software Developer & Cloud Solutions Specialist</p>
          <p className="hero-description">
            I build secure, scalable applications that leverage cutting-edge technologies like LLMs, cloud platforms, and modern web frameworks. Let's create something amazing together!
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
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
