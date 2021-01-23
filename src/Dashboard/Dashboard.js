

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Dashboard() {
  return (
    <div className="m-5">
      <Container>
        <h1 className="text-center"><strong>Login</strong></h1>

        <Form autoComplete="off" className="mt-3">
          <Container>
            <Row>
            <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="email" placeholder="email"  />
            <Form.Text className="text-muted">
            <small className="error"></small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="password" placeholder="password" />
            <Form.Text className="text-muted">
            <small className="error"></small>
            </Form.Text>
          </Form.Group>
          </Col>
        
    
          </Row>
          </Container>
         
        </Form>

        <Button variant="primary" className="btn-4">Login</Button>
        <Button variant="primary" className="btn-4">forgot password</Button>

      </Container>
      
    </div>
  )
}

export default Dashboard
