import React from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Step3() {
  return (
    <div className="text-dark text-center m-4">
      <h3>Personal Information</h3>

      <Form>
      <Container>
        <Row>
        <Col lg={4}>

        <Form.Group controlId="formBasicEmail">
        <Form.Control as="select">
          <option>Title</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Alhaji</option>
          <option>Chief</option>
          <option>Dr</option>
          </Form.Control>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </Col>
      <Col lg={4}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      </Col>
      <Col lg={4}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      <Col lg={4}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="D.O.B" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      <Col lg={4}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control as="select">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Col>

      <Col lg={4}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Referral Code" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      </Row>
      </Container>
     
    </Form>
    <small>N.B: Applications with referral code are processed faster</small>
    <br />
<Button variant="primary" className="btn-4">Previous</Button>
 <Button variant="primary" className="btn-4">Next</Button>
    </div>
  )
}

export default Step3
