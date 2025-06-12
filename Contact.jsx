import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding" >
      <Container fluid="md">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Get In Touch</h2>
            <p className="lead">Let's discuss your next project or opportunity</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success\" className="mb-4">
                <i className="fas fa-check-circle me-2"></i>
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}
            
            <Card className="contact-form border-0 shadow">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Discussion"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button type="submit" className="btn-custom">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={4} className="text-center mb-4">
            <Card className="card-hover border-0 h-100">
              <Card.Body className="p-4">
                <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                <h5>Email</h5>
                <p className="text-muted">palasathwik95@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} className="text-center mb-4">
            <Card className="card-hover border-0 h-100">
              <Card.Body className="p-4">
                <i className="fas fa-phone fa-3x text-primary mb-3"></i>
                <h5>Phone</h5>
                <p className="text-muted">+91 9515770855</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} className="text-center mb-4">
            <Card className="card-hover border-0 h-100">
              <Card.Body className="p-4">
                <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                <h5>Location</h5>
                <p className="text-muted">Hyderabad, India</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;