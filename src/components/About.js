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
                  <p className="about-details">
                    My background includes API design, CI/CD automation, database management, and leveraging LLMs to power intelligent applications. 
                    I'm passionate about creating impactful solutions — whether that's secure cloud apps like BlurVid, which protects user media with AWS Rekognition, 
                    or research-driven tools that improve developer workflows.
                  </p>
                  <div className="about-stats">
                    <div className="stat">
                      <h3>🎓 UBC</h3>
                      <p>B.Sc. Computer Science</p>
                    </div>
                    <div className="stat">
                      <h3>💼 Wizlearnr</h3>
                      <p>Technical Intern</p>
                    </div>
                    <div className="stat">
                      <h3>🔬 UBC</h3>
                      <p>Research Assistant</p>
                    </div>
                  </div>
                </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-user-circle"></i>
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
