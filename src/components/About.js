import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a results-driven Software Developer who specializes in full-stack development, cloud solutions, and data-driven applications. 
              I enjoy working across the stack — from designing ReactJS front-ends to developing Python FastAPI and Node.js backends, 
              and deploying solutions on AWS and GCP.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>💼</h3>
                <h3>Wizlearnr</h3>
                <p>Technical Intern</p>
              </div>
              <div className="stat">
                <h3>💼</h3>
                <h3>UBC</h3>
                <p>Research Assistant</p>
              </div>
              <div className="stat">
                <h3>🎓</h3>
                <h3>UBC</h3>
                <p>Bachelor of Science in Computer Science</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-picture">
              <img 
                src="/yacht.jpg" 
                alt="Saksham Rana - Software Developer"
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
              <div className="image-placeholder">
                <i className="fas fa-user-circle"></i>
                <p>Profile Picture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
