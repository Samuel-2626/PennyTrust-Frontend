import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps() {
  

    const [amount, setAmount] = useState('');
    const [formattedAmount, setFormattedAmount] = useState('');
    const [amountValidation, setAmountValidation] = useState('loan amount can\'t be less than N20,000');
    const [errorLastName, setErrorLastName] = useState('name can\'t be less than three character');
    const [errorFirstName, setErrorFirstName] = useState('name can\'t be less than three character');
    const [tenor, setTenor] = useState('');
    const [title, setTitle] = useState('');
    const [next1, setNext1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [next3, setNext3] = useState(true);
    const [next4, setNext4] = useState(true);
    const [l_name, setL_name] = useState('');
    const [f_name, setF_name] = useState('');
    const [gender, setGender] = useState('');
    const [code, setCode] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('email can\'t be less than 8 characters');
    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState('phone number must be eleven numbers');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('city can\'t be less than three characters');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('Address can\'t be less than ten characters');
    const [stateOfNigeria, setStateOfNigeria] = useState('');

    // Get Current Date
    var today = new Date();
    var end = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1)//January is 0!
    var end_mm = String(today.getMonth() + tenor)//January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    end = (end_mm)  + '/' + dd + '/' + yyyy;

    function currencyFormat(num) {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }
  
    const handleAmountChange = (e) => {

     
  
      setAmount(e.target.value)
      
  
      if (parseInt(e.target.value) < 20000) {
        setAmountValidation('loan amount can\'t be less than N20,000')
       } else if (parseInt(e.target.value)  > 1000000) {
        setAmountValidation('loan amount can\'t be greater than N1,000,000')
       }
        else if(Number.isInteger(parseInt(e.target.value) ) === false) {
          setAmountValidation('Only numbers allowed')
        }
      else {
        setAmountValidation('')
        let a = currencyFormat(parseInt(e.target.value))
        setFormattedAmount(a)
        }
      
  
    }
  
  
    const handleSubmitClick1 = () => {
      setStep3(false)
      setStep2(true)    
    }

    const handleSubmitClick2 = () => {
      setStep2(false) 
      setStep3(true)
    }

    
    const handleFirstNameChange = (e) => {
      setF_name(e.target.value)
      if (e.target.value.length < 3) {
        setErrorFirstName('name can\'t be less than three character')
      }
      else {
        setErrorFirstName('')
      }
    }

    const handleLasttNameChange = (e) => {
      setL_name(e.target.value)
      if (e.target.value.length < 3) {
        setErrorLastName('name can\'t be less than three character')
      }
      else {
        setErrorLastName('')
      }
    }

    const handleCode = (e) => {
      setCode(e.target.value)
    }

    const handleDate = (e) => {
      setDate(e.target.value)
      console.log(date);
    }

    const handleSubmitClick3 = () => {
      setStep3(false)
      setStep4(true)
    }

    const handleSubmitClick4 = () => {
      setStep4(false)
      setStep3(true)
    }

    const handleEmail = (e) => {
      setEmail(e.target.value)

      if ((e.target.value.length) < 8) {
        setEmailError('email can\'t be less than 8 characters')
       } 
      else {
        setEmailError('')
        }

    }

    const handleNumber = (e) => {
      setNumber(e.target.value)

      if ((e.target.value.length) !== 11) {
        setNumberError('phone number must be 11 characters')
       } else if(Number.isInteger(parseInt(e.target.value) ) === false) {
        setNumberError('Only numbers allowed')
      }
      else {
        setNumberError('')
        }
    }

    const handleCity = (e) => {
      setCity(e.target.value)

      if ((e.target.value.length) < 3) {
        setCityError('city must be atleast 3 characters')
       } 
      else {
        setCityError('')
        }

    }

    const handleAddress = (e) => {
      setAddress(e.target.value)

      if ((e.target.value.length) < 3) {
        setAddressError('Address must be atleast 10 characters')
       } 
      else {
        setAddressError('')
        }

    }

  
   
    useEffect(() => {

      function passValidation1() {
        if (amountValidation === '' && tenor !== '') {
          setNext1(false)
        } else {
          setNext1(true)
        }
      }

      passValidation1();

    }, [tenor, amountValidation])

    useEffect(() => {
      function passValidation2() {
        if (errorFirstName === '' && errorLastName === '' && title !== '' && gender !== '' && date !== '') {
          setNext3(false)
        } else {
          setNext3(true)
        }
  
      }

      passValidation2();

    }, [l_name, f_name, title, gender, date, errorFirstName, errorLastName])


    useEffect(() => {

      function passValidation3() {

        if (cityError === '' && numberError === '' && emailError === '' && addressError === '' && stateOfNigeria !== "") {
          setNext4(false)
        } else {
          setNext4(true)
        }

      }

      passValidation3()

    }, [city, address, number, email, cityError, numberError, emailError, addressError, stateOfNigeria])
  
  
  
      if (step2) {
  
  
        return (
          <Col lg={8} className="apply_form p-3">
            <div className="text-center">
              <big className="apply_number apply_background">1</big>
              <hr className="apply_hr apply_background" />
              <big className="apply_number apply_border">2</big>
              <hr className="apply_hr" />
              <big className="apply_number">3</big>
              <hr className="apply_hr" />
              <big className="apply_number">4</big>
              <hr className="apply_hr" />
              <big className="apply_number">5</big>
            </div>
          <div className="text-dark text-center m-4">
            <h6><strong>Loan Breakdown</strong></h6>
      
            <table className="table table-striped table-bordered">
          <tr>
            <td>Amount</td>
            <td>&#8358; {formattedAmount}</td>
          </tr>
      
          <tr>
      
            <td>Duration</td>
            <td>{tenor} Months</td>
          </tr>
      
          <tr>
      
            <td>Monthly Repayment</td>
            <td>&#8358; { amount / tenor }</td>
          </tr>
      
          <tr>
      
            <td>Loan Start Date</td>
            <td>{today}</td>
          </tr>
      
          <tr>
      
            <td>Loan End Date</td>
            <td>{end}</td>
          </tr>
      
          <tr>
      
            <td>Interest per day</td>
            <td>0.25%</td>
          </tr>
          
      
      </table>
      
          <p>
          <small>
              By clicking Start Application, I consent to PennyTrust Inc. obtaining information from relevant third parties as may be necessary, on my employment details, salary payment, loans and other related data, to make a decision on my loan application. I also consent to the loan amounts being deducted from my salary at source before credit to my account and any outstanding loans being recovered automatically from any other accounts linked to me in the case of default
            </small>
          </p>
            
            <Button variant="primary" className="btn-4" onClick={() => setStep2(false)}>Previous</Button>
            <Button variant="primary" className="btn-4" onClick={handleSubmitClick2}>Start Application</Button>
          </div>
          </Col>
        )
  
  
      }

      if (step3) {
        return (
          <Col lg={8} className="apply_form p-3">
          <div className="text-center">
            <big className="apply_number apply_background">1</big>
            <hr className="apply_hr apply_background" />
            <big className="apply_number apply_background">2</big>
            <hr className="apply_hr apply_background" />
            <big className="apply_number apply_border">3</big>
            <hr className="apply_hr" />
            <big className="apply_number">4</big>
            <hr className="apply_hr" />
            <big className="apply_number">5</big>
          </div>
          <div className="text-dark text-center m-4">
            <h6><strong>Personal Information</strong></h6>
      
            <Form>
            <Container>
              <Row>
              <Col lg={4}>
      
              <Form.Group controlId="formBasicEmail">
              <Form.Control as="select" value={title} onChange={(e) => setTitle(e.target.value)}>
                <option value="" hidden>Title</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="alhaji">Alhaji</option>
                <option value="chief">Chief</option>
                <option value="dr">Dr</option>
                </Form.Control>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              </Col>
            <Col lg={4}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="First Name" value={f_name} onChange={handleFirstNameChange}  />
              <Form.Text className="text-muted">
              <small className="error">{errorFirstName}</small>
              </Form.Text>
            </Form.Group>
      
            </Col>
            <Col lg={4}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Last Name" value={l_name} onChange={handleLasttNameChange}  />
              <Form.Text className="text-muted">  
              <small className="error">{errorLastName}</small>
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={4}>
      
            <Form.Group controlId="formBasicEmail">
              <input type="date" id="start" name="trip-start"
       placeholder="Date of Birth"
       min="1960-12-31" max="2000-12-31" className="form-control" required value={date} onChange={handleDate}></input>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={4}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="" hidden>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Col>
      
            <Col lg={4}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Referral Code" value={code} onChange={handleCode} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            </Col>
      
            </Row>
            </Container>
           
          </Form>
          <small>N.B: Applications with referral code are processed faster</small>
          <br />
      <Button variant="primary" className="btn-4" onClick={handleSubmitClick1}>Previous</Button>
       <Button variant="primary" className="btn-4" disabled={next3} onClick={handleSubmitClick3}>Next</Button>
          </div>
        </Col>
        )
      }

      if (step4) {
        return (
          <Col lg={8} className="apply_form p-3">
          <div className="text-center">
            <big className="apply_number apply_background">1</big>
            <hr className="apply_hr apply_background" />
            <big className="apply_number apply_background">2</big>
            <hr className="apply_hr apply_background" />
            <big className="apply_number apply_background">3</big>
            <hr className="apply_hr apply_background" />
            <big className="apply_number apply_border">4</big>
            <hr className="apply_hr" />
            <big className="apply_number">5</big>
          </div>
          <div className="text-dark text-center m-4">
            <h6><strong>Contact Information</strong></h6>
      
            <Form>
            <Container>
              <Row>
              <Col lg={6}>
      
              <Form.Group controlId="formBasicEmail">
              <Form.Control type="eamil" placeholder="Email" value={email} onChange={handleEmail}  />
              <Form.Text className="text-muted">
              <small className="error">{emailError}</small>
              </Form.Text>
            </Form.Group>
              </Col>
            <Col lg={6}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Phone Number" value={number} onChange={handleNumber} />
              <Form.Text className="text-muted">
              <small className="error">{numberError}</small>
              </Form.Text>
            </Form.Group>
      
            </Col>
            <Col lg={12}>

            <Form.Group controlId="formBasicEmail">
            <textarea className="form-control" placeholder="Home Address" value={address} onChange={handleAddress} />
              <Form.Text className="text-muted">
              <small className="error">{addressError}</small>
              </Form.Text>
            </Form.Group>
            <br />
            </Col>
      
            <Col lg={6}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="City" value={city} onChange={handleCity} />
              <Form.Text className="text-muted">
              <small className="error">{cityError}</small>
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={6}>
      
            <Form.Group controlId="formBasicEmail">
              <Form.Control as="select" value={stateOfNigeria} onChange={(e) => setStateOfNigeria(e.target.value)}>
                <option value="" hidden>State</option>
                <option value="abia">Abia</option>
                <option value="adamawa">Adamawa</option>
                <option value="akwaibom">Akwa Ibom</option>
                <option value="anambra">Anambra</option>
                <option value="bauchi">Bauchi</option>
                <option value="bayelsa">Bayelsa</option>
                <option value="benue">Benue</option>
                <option value="borno">Borno</option>
                <option value="crossriver">Cross River</option>
                <option value="delta">Delta</option>
                <option value="ebonyi">Ebonyi</option>
                <option value="edo">Edo</option>
                <option value="ekiti">Ekiti</option>
                <option value="enugu">Enugu</option>
                <option value="gombe">Gombe</option>
                <option value="imo">Imo</option>
                <option value="jigawa">Jigawa</option>
                <option value="kaduna">Kaduna</option>
                <option value="kano">Kano</option>
                <option value="katsina">Katsina</option>
                <option value="kebbi">Kebbi</option>
                <option value="kogi">Kogi</option>
                <option value="kwara">Kwara</option>
                <option value="lagos">Lagos</option>
                <option value="nasarawa">Nasawara</option>
                <option value="niger">Niger</option>
                <option value="ogun">Ogun</option>
                <option value="ondo">Ondo</option>
                <option value="osun">Osun</option>
                <option value="oyo">Oyo</option>
                <option value="plateau">Plateau</option>
                <option value="rivers">Rivers</option>
                <option value="sokoto">Sokoto</option>
                <option value="taraba">Taraba</option>
                <option value="yobe">Yobe</option>
                <option value="zamfara">Zamfara</option>
              </Form.Control>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Col>
      
            </Row>
            </Container>
           
          </Form>
            <Button variant="primary" className="btn-4" onClick={handleSubmitClick4}>Previous</Button>
           <Button variant="primary" className="btn-4" disabled={next4}>Next</Button>
          </div>
        
        </Col>
        )
      }
  
  
  
    return (
      <Col lg={8} className="apply_form p-3">
            <div className="text-center">
              <big className="apply_number apply_border">1</big>
              <hr className="apply_hr" />
              <big className="apply_number">2</big>
              <hr className="apply_hr" />
              <big className="apply_number">3</big>
              <hr className="apply_hr" />
              <big className="apply_number">4</big>
              <hr className="apply_hr" />
              <big className="apply_number">5</big>
            </div>
            
         
      <div className="text-dark text-center m-4">
        <h6><strong>Kindly provide the amount you want and your preferred duration</strong></h6>
      
        <Form>
        <Container>
          <Row>
          <Col lg={6}>
  
        <Form.Group controlId="formBasicEmail">
  
          {/* 20,000 <= loan amount <= 1,000,000 */}
  
  
          <Form.Control type="text" placeholder="Loan Amount" value={amount} onChange={handleAmountChange} />
          
          
          <Form.Text className="text-muted">
            <small className="error">{amountValidation}</small>
          </Form.Text>
        </Form.Group>
        </Col>
  
        <Col lg={6}>
  
        <Form.Group controlId="formBasicEmail">
        <Form.Control as="select" value={tenor} onChange={(e) => setTenor(e.target.value)}>
          <option value="" hidden>Tenor</option>
          <option value="2">2 Months</option>
          <option value="3">3 Months</option>
          <option value="4">4 Months</option>
          <option value="5">5 Months</option>
          <option value="6">6 Months</option>
          <option value="7">7 Months</option>
          <option value="8">8 Months</option>
          <option value="9">9 Months</option>
          <option value="10">10 Months</option>
          <option value="11">11 Months</option>
          <option value="12">12 Months</option>
          <option value="13">13 Months</option>
          <option value="14">14 Months</option>
          <option value="15">15 Months</option>
          <option value="16">16 Months</option>
          <option value="17">17 Months</option>
          <option value="18">18 Months</option>
          <option value="19">19 Months</option>
          <option value="20">20 Months</option>
          <option value="21">21 Months</option>
          <option value="22">22 Months</option>
          <option value="23">23 Months</option>
          <option value="24">24 Months</option>
          </Form.Control>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </Col>
  
        </Row>
        </Container>
       
      </Form>
  <Button variant="primary" disabled={next1} className="btn-4" onClick={handleSubmitClick1}>Next</Button>
      </div>
      </Col>
    )
  }

export default Steps
