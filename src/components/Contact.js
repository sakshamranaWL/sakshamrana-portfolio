import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect!</h2>
        <div className="contact-content">
          <div className="social-links-container">
            <div className="social-links">
              <div className="social-link-wrapper">
                <a href="https://github.com/sakshamrana7" className="social-link github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <span className="social-label">Personal</span>
              </div>
              <div className="social-link-wrapper">
                <a href="https://github.com/sakshamranaWL" className="social-link github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <span className="social-label">Work</span>
              </div>
              <div className="social-link-wrapper">
                <a href="https://linkedin.com/in/sakshamrana7" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <span className="social-label">LinkedIn</span>
              </div>
              <div className="social-link-wrapper">
                <a href="https://twitter.com/saksham_rana7" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <span className="social-label">X</span>
              </div>
              <div className="social-link-wrapper">
                <a href="https://instagram.com/sakshamrrana" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <span className="social-label">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {notification && (
        <div className={`notification notification-${notification.type} show`}>
          <div className="notification-content">
            <span className="notification-message">{notification.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
