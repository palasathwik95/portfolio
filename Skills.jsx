import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 75, icon: 'fab fa-react' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Node.js', level: 90, icon: 'fab fa-node-js' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-database' },
    { name: 'MySQL', level: 80, icon: 'fas fa-database' },
    { name: 'Git', level: 70, icon: 'fab fa-git-alt' },
    { name: 'Express.js', level: 80, icon: 'fas fa-server' }
  ];

  const tools = [
    'VS Code', 'GitHub',  'Chrome DevTools'
  ];

  return (

      <Container id="skills" className="section-padding" fluid="md">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Skills & Technologies</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8}>
            <Card className="card-hover border-0 mb-4">
              <Card.Body className="p-4">
                <h4 className="mb-4">Technical Skills</h4>
                <Row>
                  {skills.map((skill, index) => (
                    <Col md={6} key={index} className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <i className={`${skill.icon} me-2`} style={{color: '#667eea'}}></i>
                        <span className="fw-bold">{skill.name}</span>
                        <span className="ms-auto text-muted">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <ProgressBar 
                          now={skill.level} 
                          className="skill-progress"
                          style={{height: '8px'}}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="card-hover border-0 mb-4">
              <Card.Body className="p-4">
                <h4 className="mb-4">Tools & Platforms</h4>
                <div className="d-flex flex-wrap">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="badge bg-primary me-2 mb-2 p-2"
                      style={{fontSize: '0.9rem'}}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
            
            <Card className="card-hover border-0">
              <Card.Body className="p-4">
                <h4 className="mb-4">Learning & Development</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-book text-warning me-2"></i>
                    Full Stack Web Development
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-book text-warning me-2"></i>
                    React.js Advanced Concepts
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-book text-warning me-2"></i>
                    Node.js & Express.js
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-book text-warning me-2"></i>
                    Database Management
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  
  );
};

export default Skills;