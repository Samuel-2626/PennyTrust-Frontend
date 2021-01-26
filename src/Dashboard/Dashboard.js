import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserContext} from '../UserContext';
import axios from 'axios';



function Dashboard() {

  const [token, setToken] = useContext(UserContext);

  const handleClick = (e) => {
 
  

    console.log(token);
    axios.get('http://127.0.0.1:8000/apis/v1/get_user/', {
      // headers: {
      //   'Authorization': `Token e328056771a518ff288da8f5e311f10576cc2c18
      //   `
      // }
    }).then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  if (token !== '') {
    return (
      <div className="m-5">
        <Container>
          <h2>Welcome to your dashboard</h2>
          

        </Container>
      </div>
    )
  } 

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

        <Button variant="primary" className="btn-4" onClick={setToken()}>Login</Button>
        <Button variant="primary" className="btn-4">forgot password</Button>

      </Container>
      
    </div>
  )
}

export default Dashboard
