import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects & Freelance',
      period: '2023 - Present',
      description: 'Developing full-stack web applications using React.js, Node.js, and MongoDB. Creating responsive and user-friendly interfaces with modern design principles.',
      achievements: [
        'Built 10+ responsive web applications using React.js',
        'Implemented RESTful APIs using Node.js and Express.js',
        'Worked with MongoDB for database design and management',
        'Deployed applications on platforms like Netlify and Vercel'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Self-Learning & Practice',
      period: '2022 - 2023',
      description: 'Focused on learning modern web development technologies and building projects to strengthen programming skills and understanding of software development.',
      achievements: [
        'Mastered HTML5, CSS3, and JavaScript fundamentals',
        'Learned React.js and component-based architecture',
        'Built responsive websites using Bootstrap and CSS Grid',
        'Practiced version control using Git and GitHub'
      ]
    },
    {
      title: 'Computer Science Student',
      company: 'Sreenidhi Institute of Science and Technology',
      period: '2022 - Present',
      description: 'Pursuing B.Tech in Computer Science and Engineering with focus on software development, algorithms, and modern programming practices.',
      achievements: [
        'Maintaining CGPA of 8.5/10 in academic coursework',
        'Completed projects in Data Structures and Algorithms',
        'Participated in coding competitions and hackathons',
        'Active member of college technical clubs'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Experience & Journey</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12}>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <Card className="card-hover border-0">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h4 className="gradient-text mb-1">{exp.title}</h4>
                          <h6 className="text-primary mb-2">{exp.company}</h6>
                        </div>
                        <span className="badge bg-secondary">{exp.period}</span>
                      </div>
                      
                      <p className="text-muted mb-3">{exp.description}</p>
                      
                      <h6 className="mb-2">Key Achievements:</h6>
                      <ul className="list-unstyled">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="mb-1">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;