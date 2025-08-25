import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }, index * 200);
    });
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
                    <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">React.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML/CSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">Python FastAPI</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">SQL/NoSQL</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Cloud & DevOps</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">AWS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">GCP</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">CI/CD</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Skills;
