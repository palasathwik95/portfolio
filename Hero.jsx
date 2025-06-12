import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Full Stack Developer',
    'React.js Developer',
    'Node.js Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.length < titles[currentIndex].length) {
        setText(titles[currentIndex].substring(0, text.length + 1));
      } else {
        setTimeout(() => {
          setText('');
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [text, currentIndex, titles]);

  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1QkwA_ncPb_7rQEmgkTzBLrd3zLpJj30c/view?usp=drivesdk';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>
      
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1>
              Hi, i'm <span className="text-warning">Sathwik Reddy</span>
            </h1>
            <p className="typing-animation">
              {text}
            </p>
            <p>
              Passionate Full Stack Developer with expertise in React.js, Node.js, and modern web technologies.
              Currently pursuing B.Tech in Computer Science and Engineering.
            </p>
            <div className="mt-4">
              <Button 
                className="btn-custom me-3"
                href="#contact"
              >
                <i className="fas fa-envelope me-2"></i>
                Get In Touch
              </Button>
              <Button 
                className="btn btn-outline-light"
                onClick={handleResumeClick}
              >
                <i className="fas fa-download me-2"></i>
                Download Resume
              </Button>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <img
              src="/sath132.jpg"
              alt="Profile"
              className="profile-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;