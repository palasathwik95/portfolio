import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">About Me</h2>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={6}>
            <Card className="card-hover border-0">
              <Card.Body className="p-4">
                <h4 className="mb-4">Professional Summary</h4>
                <p className="text-muted mb-4">
                  I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science 
                  and Engineering at Malla Reddy University. I specialize in 
                  React.js, Node.js, and modern JavaScript technologies.
                </p>
                <p className="text-muted mb-4">
                  My expertise includes developing scalable web applications, implementing 
                  responsive designs, and working with databases like MongoDB and MySQL. 
                  I'm committed to writing clean, maintainable code and staying up-to-date 
                  with the latest industry trends.
                </p>
                
                <Row className="mt-4">
                  <Col sm={6}>
                    <div className="mb-3">
                      <strong>Name:</strong>
                      <p className="text-muted mb-0">Sathwik Reddy</p>
                    </div>
                    <div className="mb-3">
                      <strong>Email:</strong>
                      <p className="text-muted mb-0">palasathwik95@gmail.com</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="mb-3">
                      <strong>Phone:</strong>
                      <p className="text-muted mb-0">+91 9515770855</p>
                    </div>
                    <div className="mb-3">
                      <strong>Location:</strong>
                      <p className="text-muted mb-0">Hyderabad, India</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6}>
            <Row>
              <Col sm={6} className="mb-4">
                <Card className="card-hover text-center gradient-bg text-white">
                  <Card.Body>
                    <i className="fas fa-code fa-3x mb-3"></i>
                    <h4>3</h4>
                    <p>Projects Completed</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-4">
                <Card className="card-hover text-center" style={{background: 'linear-gradient(135deg, #f093fb, #f5576c)'}}>
                  <Card.Body className="text-white">
                    <i className="fas fa-graduation-cap fa-3x mb-3"></i>
                    <h4>B.Tech</h4>
                    <p>AIML Student</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-4">
                <Card className="card-hover text-center" style={{background: 'linear-gradient(135deg, #4facfe, #00f2fe)'}}>
                  <Card.Body className="text-white">
                    <i className="fas fa-laptop-code fa-3x mb-3"></i>
                    <h4>Full Stack</h4>
                    <p>Development</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-4">
                <Card className="card-hover text-center" style={{background: 'linear-gradient(135deg, #43e97b, #38f9d7)'}}>
                  <Card.Body className="text-white">
                    <i className="fas fa-coffee fa-3x mb-3"></i>
                    <h4>Daily 3+</h4>
                    <p>Hours of Coding</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;