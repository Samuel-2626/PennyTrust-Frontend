import React from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

function Step1() {
  return (
    <div className="text-dark text-center m-4">
      <h6>Kindly provide the amount you want and your preferred duration</h6>
      <Form>
      <Container>
        <Row>
        <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Loan Amount" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col lg={6}>

      <Form.Group controlId="formBasicEmail">
      <Form.Control as="select">
        <option>Tenor</option>
        <option>2 Months</option>
        <option>3 Months</option>
        <option>4 Months</option>
        <option>5 Months</option>
        <option>6 Months</option>
        <option>7 Months</option>
        <option>8 Months</option>
        <option>9 Months</option>
        <option>10 Months</option>
        <option>11 Months</option>
        <option>12 Months</option>
        <option>13 Months</option>
        <option>14 Months</option>
        <option>15 Months</option>
        <option>16 Months</option>
        <option>17 Months</option>
        <option>18 Months</option>
        <option>19 Months</option>
        <option>20 Months</option>
        <option>21 Months</option>
        <option>22 Months</option>
        <option>23 Months</option>
        <option>24 Months</option>
        </Form.Control>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>

      </Row>
      </Container>
     
    </Form>
      <Link to="/apply/step-2"><Button variant="primary">Next</Button></Link>
    </div>
  )
}

export default Step1
