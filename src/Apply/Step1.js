import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { Link } from 'react-router-dom';

function Step1() {

  const [amount, setAmount] = useState('');
  const [amountValidation, setAmountValidation] = useState('loan amount can\'t be less than N20,000');
  const [tenor, setTenor] = useState('');
  const [next1, setNext1] = useState(true);
  const [step2, setStep2] = useState(false);

  const handleAmountChange = (e) => {

    setAmount(e.target.value)

    if (parseInt(amount) < 20000) {
      setAmountValidation('loan amount can\'t be less than N20,000')
     } else if (parseInt(amount) > 1000000) {
      setAmountValidation('loan amount can\'t be greater than N1,000,000')
    } else {
      setAmountValidation('')
    }
    

  }

  const passValidation1 = () => {
    if (amountValidation === '' && tenor !== '') {
      setNext1(false)
    } else {
      setNext1(true)
    }
  }

  const handleSubmitClick1 = () => {
    setStep2(true)
  }

 
  useEffect(() => (
    passValidation1()
  ), [amount, tenor])



    if (step2) {


      return (
        <div className="text-dark text-center m-4">
          <h6><strong>Loan Breakdown</strong></h6>
    
          <table class="table table-striped table-bordered">
        <tr>
          <td>Amount</td>
          <td>First</td>
        </tr>
    
        <tr>
    
          <td>Duration</td>
          <td>@mdo</td>
        </tr>
    
        <tr>
    
          <td>Monthly Repayment</td>
          <td></td>
        </tr>
    
        <tr>
    
          <td>Loan Start Date</td>
          <td></td>
        </tr>
    
        <tr>
    
          <td>Loan End Date</td>
          <td></td>
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
          
          <Link to="/apply/step-1"><Button variant="primary" className="btn-4">Previous</Button></Link>
          <Link to="/apply/step-3"><Button variant="primary" className="btn-4">Start Application</Button></Link>
        </div>
      )


    }



  return (
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
        <option value="">Tenor</option>
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
  )
}

export default Step1
