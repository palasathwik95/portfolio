import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    // Create a sample PDF URL - replace with your actual resume PDF URL
    const resumeUrl = 'https://drive.google.com/file/d/1QkwA_ncPb_7rQEmgkTzBLrd3zLpJj30c/view?usp=drivesdk';
    window.open(resumeUrl, '_blank');
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="gradient-text">
          <i className="fas fa-code me-2"></i>
          Sathwik Reddy
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button 
              className="btn btn-success resume-btn ms-3"
              onClick={handleResumeClick}
            >
              <i className="fas fa-download me-2"></i>
              Resume
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;