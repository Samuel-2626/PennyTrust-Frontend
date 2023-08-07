import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserContext} from '../UserContext';
import {PrimaryKeyContext} from '../UserContext';
import {StaffStatusContext} from '../UserContext';
import axios from 'axios';



function Dashboard() {

  const [token, setToken] = useContext(UserContext);
  const [pk, setPk] = useContext(PrimaryKeyContext);
  const [status, setStatus] = useContext(StaffStatusContext);

  const [profile, setProfile] = useState({})

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('This field is required')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('This field is required')
  const [disable, setDisable] = useState(true)
  const [serverError, setServerError] = useState('')

  function ValidateEmail(mail) 
  {
    let re =  /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  function checkPassword(str)
  {
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    return re.test(str);
  }


  const handleLogin = () => {
    axios.post(`https://samuel.professortorimiro.info/api/v1/rest-auth/login/`, {
        email: email,
        password: password
      }).then((res) => {
        console.log(res.data);
        setToken(res.data.key)

        var temp_token = res.data.key

        axios.get(`https://samuel.professortorimiro.info/apis/v1/get_user/${email}`, {
          headers: {
            'Authorization': `Token ${temp_token}`
          }
        }).then((res) => {
          console.log(res.data);
          console.log(res.data.fields['is_staff']);
          setPk(res.data.pk)
          if (res.data.fields['is_staff'] === false) {
            setStatus('regular')
          } else {
            setStatus('admin')
          }
          
        
          console.log(pk);
          console.log(status);
        }).catch(error => {
          console.log(error);
        })
 
      }).catch((error) => {
        console.log(error);
        setServerError('Unable to log in with provided credentials.')
      })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    if  (ValidateEmail(e.target.value) === false) {
       setEmailError('You have entered an invalid email address!')
     }
    else {
      setEmailError('')
      }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 10) {
      setPasswordError('Password can\'t be less than 10 characters')
    } else if (checkPassword(e.target.value) === false) {
      setPasswordError('Password must have at least one number, one lowercase and one uppercase letter')
    }
    else {
      setPasswordError('')
    }
  }

 

  useEffect(() => (

    axios.get(`https://samuel.professortorimiro.info/apis/v1/get_profile/${pk}`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then((res) => {
        setProfile(res.data.fields);
        console.log(res.data.fields);
      }).catch((error) => {
        console.log(error);
      })

  ), [pk, token, status])

  useEffect(() => {

      if (emailError === '' && passwordError === '') {
        setDisable(false)
      } else {
        setDisable(true)
      }


    }, [email, emailError, password, passwordError])


  if (token !== '' && status === 'regular') {
    return (
      <div className="m-5">
        <Container>
          <h3>Hi, welcome to your dashboard</h3>
          
          <hr />

          <div className='container'>
<br />
            <div className='row'>
              <div className='col-sm-6 mb-4 info'>
                <h3>Personal Info</h3>
                <p><strong>Full Name: </strong>{profile.title} {profile.first_name} {profile.last_name}</p>
                <p><strong>DoB:</strong> {profile.date_of_birth}</p>
                <p><strong>Gender:</strong> {profile.gender}</p>
                <p><strong>Phone number:</strong> {profile.phone_number}</p>
              </div>
              <div className='col-sm-6 mb-4 info'>
                <h3>Account Info</h3>
                <p><strong>Account number:</strong> {profile.account_number}</p>
                <p><strong>Salary bank name:</strong> {profile.salary_bank_name} Bank</p>
                <p><strong>Place of work:</strong> {profile.place_of_work}</p>
                <p><strong>IPPIS number:</strong> {profile.ippis_number}</p>
              </div>
              <div className='col-sm-6 mb-4 info'>
                <h3>Loan Info</h3>
                <p><strong>Loan amount:</strong> {profile.loan_amount}</p>
                <p><strong>Tenor:</strong> {profile.tenor} months</p>
              </div>
              <div className='col-sm-6 mb-4 info'>
                <h3>Additional Info</h3>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>City:</strong> {profile.city}</p>
                <p><strong>State:</strong> {profile.state}</p>
              </div>
            </div>
          </div>
          
        </Container>
      </div>
    )
  } 


  if (token !== '' && status === 'admin') {
    return (
      <div className="m-5">
        <Container>
          <h2>Welcome Admin</h2>
        
          
        </Container>
      </div>
    )
  } 

  return (
    <div className="m-5">
      <Container>
        <h1 className="text-center"><strong>Login</strong></h1>
        <div className="error-background">{serverError}</div>

        <Form autoComplete="off" className="mt-3">
          <Container>
            <Row>
            <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="email" placeholder="email"  onChange={handleEmail} value={email} />
            <Form.Text className="text-muted">
            <small className="error">{emailError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="password" placeholder="password" onChange={handlePassword} value={password} />
            <Form.Text className="text-muted">
            <small className="error">{passwordError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
        
    
          </Row>
          </Container>
         
        </Form>

        <Button variant="primary" className="btn-4" onClick={handleLogin} disabled={disable}>Login</Button>
        <Button variant="primary" className="btn-4">forgot password</Button>

      </Container>
      
    </div>
  )
}

export default Dashboard
