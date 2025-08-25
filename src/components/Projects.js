import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BlurVid - Secure Media Protection',
      description: 'A secure cloud application that protects user media using AWS Rekognition. Built with React frontend and Python FastAPI backend, featuring secure data pipelines and cloud-native architecture.',
      technologies: ['React', 'Python FastAPI', 'AWS Rekognition', 'SQL'],
      icon: 'fas fa-shield-alt',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'LLM-Powered API Platform',
      description: 'Developed at Wizlearnr, this platform features cloud-native APIs, fine-tuned LLMs, and optimized retrieval pipelines. Migrated infrastructure from Vertex AI to Pinecone for improved performance.',
      technologies: ['Python', 'LLMs', 'Pinecone', 'GCP', 'FastAPI'],
      icon: 'fas fa-brain',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'API Evolution Analysis Tools',
      description: 'Research tools developed at UBC for analyzing API evolution and designing secure data pipelines for large-scale datasets. Focuses on API design and data security.',
      technologies: ['Python', 'Data Analysis', 'API Design', 'Security'],
      icon: 'fas fa-chart-line',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="image-placeholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
