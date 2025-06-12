import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1QkwA_ncPb_7rQEmgkTzBLrd3zLpJj30c/view?usp=drivesdk';
    window.open(resumeUrl, '_blank');
  };

  return (
    <footer className="gradient-bg text-white py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h3 className="mb-4">Sathwik Reddy</h3>
            <p className="mb-4">
              Full Stack Developer passionate about creating amazing digital experiences
            </p>
            
            <div className="social-links mb-4">
              <a href="https://github.com/palasathwik95" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/sathwik-reddy-7471a9350" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:palasathwik95@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
            <div className="mb-4">
              <button 
                className="btn btn-outline-light me-3"
                onClick={handleResumeClick}
              >
                <i className="fas fa-download me-2"></i>
                Download Resume
              </button>
              <a href="#contact" className="btn btn-outline-light">
                <i className="fas fa-paper-plane me-2"></i>
                Message me
              </a>
            </div>
            
            <hr className="my-4" />
            
            <Row>
              <Col md={6}>
                <p className="mb-0">
                  &copy; 2024 Sathwik Reddy. All rights reserved.
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-0">
                  Built with ❤️ using React.js & Bootstrap
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;