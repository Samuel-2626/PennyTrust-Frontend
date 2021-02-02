import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserContext} from '../UserContext';
import {PrimaryKeyContext} from '../UserContext';
import axios from 'axios';



function Dashboard() {

  const [token] = useContext(UserContext);
  const [pk] = useContext(PrimaryKeyContext);

  const [profile, setProfile] = useState({})

 

  useEffect(() => (

    axios.get(`https://fathomless-beach-00475.herokuapp.com/apis/v1/get_profile/${pk}`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then((res) => {
        setProfile(res.data.fields);
        console.log(res.data.fields);
      }).catch((error) => {
        console.log(error);
      })

  ), [pk, token])


  if (token !== '') {
    return (
      <div className="m-5">
        <Container>
          <h2>Hello {profile.first_name}</h2>
          <p>welcome to your dashboard</p>
          <p><strong>Here are some of your details:</strong></p>
          
         <ul>
           <li>{profile.first_name} {profile.last_name}</li>
           <li>{profile.date_of_birth}</li>
           <li>{profile.gender}</li>
           <li>{profile.address}</li>
           <li>{profile.title}</li>
           <li>{profile.phone_number}</li>
         </ul>
          
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

        <Button variant="primary" className="btn-4">Login</Button>
        <Button variant="primary" className="btn-4">forgot password</Button>

      </Container>
      
    </div>
  )
}

export default Dashboard
