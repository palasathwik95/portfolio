import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Code Academy',
      description: 'A comprehensive online learning platform for coding tutorials and programming courses. Built with modern web technologies to provide an interactive learning experience.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React','HTML','CSS',' JavaScript'],
      github: 'https://github.com/palasathwik95/Code-academy.git',
    },
    {
      title: 'Trend Aura',
      description: 'A modern e-commerce platform featuring trendy fashion items with user-friendly interface, shopping cart functionality, and secure payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/palasathwik95/Trend-aura.git',
    },
    
    
    {
      title: 'Profile-map ',
      description: 'Build a pure frontend application that integrates Google Maps to track and display user locations. The app should support adding, editing, and deleting users, with their data (including location) stored temporarily in the browser using localStorage.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      github: 'https://github.com/palasathwik95/profile-map.git',
      
    }
    
  ];

  return (
    <section id="projects" className="section-padding ">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Featured Projects</h2>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="card-hover project-card h-100 border-0">
                <div style={{height: '200px', overflow: 'hidden'}}>
                  <Card.Img 
                    variant="top" 
                    src={project.image}
                    style={{height: '100%', objectFit: 'cover'}}
                  />
                </div>
                
                <div className="project-overlay">
                  
                  <Button 
                    variant="outline-light"
                    href={project.github}
                    target="_blank"
                  >
                    <i className="fab fa-github me-2"></i>
                    GitHub
                  </Button>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="gradient-text">{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mt-auto">
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="badge bg-primary me-1 mb-1"
                          style={{fontSize: '0.75rem'}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;