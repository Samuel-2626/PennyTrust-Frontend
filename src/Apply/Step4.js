import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

function Step4() {
  return (
    <div className="text-dark text-center m-4">
      <h3>Contact Information</h3>

      <Form>
      <Container>
        <Row>
        <Col lg={6}>

        <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
        </Col>
      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Phone Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      </Col>
      <Col lg={12}>

      <textarea className="form-control" placeholder="Home Address"></textarea>
      <br />

      </Col>

  

      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="City" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="State" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      </Row>
      </Container>
     
    </Form>
      <Button variant="primary" className="btn-4">Previous</Button>
     <Button variant="primary" className="btn-4">Next</Button>
    </div>
  )
}

export default Step4
