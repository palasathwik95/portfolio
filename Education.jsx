import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Artificial intelligence and Machine learning',
      school: 'Malla reddy University',
      period: '2024 - 2028',
      description: 'Currently pursuing B.Tech in AIML with focus on software development, data structures, algorithms, and modern web technologies.',
      gpa: 'CGPA: 9.86/10'
    },
    {
      degree: 'Intermediate (12th Grade)',
      school: 'Narayana Junior College',
      period: '2022 - 2024',
      description: 'Completed intermediate education with Mathematics, Physics, and Chemistry (MPC) stream.',
      gpa: 'Percentage: 96.9%'
    }
  ];

  const courses = [
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Web Development',
    'Machine Learning Basics'
  ];

  return (
    <section id="education" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Education & Learning</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8}>
            <h4 className="mb-4">Academic Background</h4>
            {education.map((edu, index) => (
              <Card key={index} className="card-hover border-0 mb-4">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="gradient-text mb-1">{edu.degree}</h5>
                      <h6 className="text-primary mb-2">{edu.school}</h6>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-secondary mb-1">{edu.period}</span>
                      <div className="text-muted small">{edu.gpa}</div>
                    </div>
                  </div>
                  <p className="text-muted mb-0">{edu.description}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>
          
          <Col lg={4}>
            <Card className="card-hover border-0">
              <Card.Body className="p-4">
                <h4 className="mb-4">Core Subjects</h4>
                <div className="d-flex flex-wrap">
                  {courses.map((course, index) => (
                    <span 
                      key={index}
                      className="badge bg-light text-dark me-2 mb-2 p-2"
                      style={{fontSize: '0.85rem'}}
                    >
                      {course}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h6 className="mb-3">Self Learning</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap text-primary me-2"></i>
                      Full Stack Web Development
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap text-primary me-2"></i>
                      React.js Complete Guide
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap text-primary me-2"></i>
                      Node.js & Express.js
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap text-primary me-2"></i>
                      MongoDB Database
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;