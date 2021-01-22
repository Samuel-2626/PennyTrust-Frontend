import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

function Step5() {
  return (
    <div className="text-dark text-center m-4">
      <h3>Employment Information</h3>

      <Form>
      <Container>
        <Row>
        <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Place of work" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="IPPIS Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
      <Form.Control as="select">
        <option>Salary Bank Name</option>
        <option>Polaris Bank</option>
        <option>Access Bank</option>
        </Form.Control>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Account Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col lg={6}></Col>

      </Row>
      </Container>
     
    </Form>

     <Button variant="primary" className="btn-4">Previous</Button>
<Button variant="primary" className="btn-4">Next</Button>
    </div>
  )
}

export default Step5
