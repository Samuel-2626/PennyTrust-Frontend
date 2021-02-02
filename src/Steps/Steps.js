import React, { useState, useEffect, useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import {Redirect} from 'react-router-dom'

import {UserContext} from '../UserContext';
import {PrimaryKeyContext} from '../UserContext'

function Steps() {

    const [token, setToken] = useContext(UserContext)
    const [pk, setPk] = useContext(PrimaryKeyContext)

    const [redirect, setRedirect] = useState(false)

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
    const [step5, setStep5] = useState(false)
    const [step6, setStep6] = useState(false)
    const [next3, setNext3] = useState(true);
    const [next4, setNext4] = useState(true);
    const [next5, setNext5] = useState(true)
    const [next6, setNext6] = useState(true)
    const [authenticating, setAuthenticating] = useState(false)
    const [failed, setFailed] = useState(false)
    const [l_name, setL_name] = useState('');
    const [f_name, setF_name] = useState('');
    const [gender, setGender] = useState('');
    const [code, setCode] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [monthly, setMonthly] = useState('')
    const [totalPayment, setTotalPayment] = useState('')
    const [totalInterest, setTotalInterest] = useState('')
    const [emailError, setEmailError] = useState('email can\'t be less than 8 characters');
    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState('phone number must be eleven numbers');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('city can\'t be less than three characters');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('Address can\'t be less than ten characters');
    const [stateOfNigeria, setStateOfNigeria] = useState('');

    const [account, setAccount] = useState('')
    const [ippis, setIppis] = useState('')
    const [work, setWork] = useState('')
    const [salary, setSalary] = useState('')
    const [accountError, setAccountError] = useState('account number can\'t be less than 7 characters')
    const [ippisError, setIppisError] = useState('ippis number can\'t be less than 7 characters')
    const [workError, setWorkError] = useState('work place number can\'t be less than 5 characters')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('Password must be atleast 7 characters')
    const [confirmPasswordError, setConfirmPasswordError] = useState('Password must be atleast 7 characters')

    // Get Current Date
    var today = new Date();
    var end = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1)//January is 0!
    var end_mm = String(today.getMonth() + parseInt(tenor))//January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    end = (end_mm)  + '/' + dd + '/' + yyyy;

    function currencyFormat(num) {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }

   function round(x) {
     return Math.round(x*100) / 100
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

    const handleSubmitClick0 = () => {
      setStep2(false)
      setStep3(false)
      setStep4(false)
      setStep5(false)
    }
  
  
    const handleSubmitClick1 = () => {
      setStep3(false)
      setStep2(true) 
      setStep5(false)
      setStep4(false)   
    }

    const handleSubmitClick2 = () => {
      setStep2(false) 
      setStep3(true)
      setStep5(false)
      setStep4(false) 
      
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
 
    }

    const handleSubmitClick3 = () => {
      setStep3(false)
      setStep4(true)
      setStep5(false)
      setStep2(false) 
    }

    const handleSubmitClick4 = () => {
      setStep4(false)
      setStep3(true)
      setStep5(false)
      setStep2(false) 
    }

    const handleSubmitClick5 = () => {
      setStep4(false)
      setStep5(true)
      setStep2(false)
      setStep3(false) 
    }

    const handleSubmitClick6 = () => {
      setStep4(true)
      setStep5(false)
      setStep3(false)
      setStep2(false) 
    }

    const handleSubmitClick7 = () => {
      setStep4(false)
      setStep5(true)
      setStep3(false)
      setStep2(false) 
      setStep6(false) 
    }

    const handleSubmitClick8 = () => {
      setStep6(true)
      setStep5(false)
      setStep3(false)
      setStep2(false) 
      setStep4(false) 

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

    const handleIppis = (e) => {
      setIppis(e.target.value)

      if ((e.target.value.length) < 8) {
        setIppisError('IPPIS Number must be atleast 7 characters')
       } else if(Number.isInteger(parseInt(e.target.value) ) === false) {
        setIppisError('Only numbers allowed')
       }
      else {
        setIppisError('')
        }

    }

    const handleWork = (e) => {
      setWork(e.target.value)

      if ((e.target.value.length) < 5) {
        setWorkError('Place of work must be atleast 5 characters')
       } 
      else {
        setWorkError('')
        }

    }

    const handleAccount = (e) => {
      setAccount(e.target.value)

      if ((e.target.value.length) < 8) {
        setAccountError('Account Number must be atleast 7 characters')
       } else if(Number.isInteger(parseInt(e.target.value) ) === false) {
        setAccountError('Only numbers allowed')
       }
      else {
        setAccountError('')
        }

    }

    const handlePassword = (e) => {

      setPassword(e.target.value)

      if ((e.target.value.length) < 8) {
        setPasswordError('Password must be atleast 7 characters')
       } 
      else {
        setPasswordError('')
        }

    }

    const handleConfirmPassword = (e) => {

      setConfirmPassword(e.target.value)

      if ((e.target.value.length) < 8) {
        setConfirmPasswordError('Password must be atleast 7 characters')
       } else if(password !== e.target.value) {
        setConfirmPasswordError('Password did not match')
       }
      else {
        setConfirmPasswordError('')
        }

    }

    const handleFinalSubmit = () => {
      setStep2(false) 
      setStep3(false)
      setStep5(false)
      setStep4(false) 
      setStep6(false)
      setFailed(false)
      setAuthenticating(true)


      axios.post('https://fathomless-beach-00475.herokuapp.com/api/v1/rest-auth/registration/', {
        email: email,
        password1: password,
        password2: confirmPassword,
      })
      .then(function (response) {

      setToken(response.data.key)
      console.log(token);

      var temp_token = response.data.key

      axios.get(`https://fathomless-beach-00475.herokuapp.com/apis/v1/get_user/${email}`, {
        headers: {
          'Authorization': `Token ${temp_token}`
        }
      }).then((res) => {

        setPk(res.data.pk)
        console.log(pk);

        var temp_pk = res.data.pk

        axios.post(`https://fathomless-beach-00475.herokuapp.com/apis/v1/profile/`, {
          user: temp_pk,
          title: title,
          first_name: f_name,
          last_name: l_name,
          gender: gender,
          date_of_birth: date,
          phone_number: number,
          city: city,
          state: stateOfNigeria,
          place_of_work: work,
          loan_amount: amount,
          tenor: tenor,
          address: address,
          ippis_number: ippis,
          salary_bank_name: salary,
          account_number: account,
          referral_code: code
        

      }).catch((error) => {
        console.log(error);
      })


      }).catch((error) => {
        console.log(error);
      })


      setStep2(false) 
      setStep3(false)
      setStep5(false)
      setStep4(false) 
      setStep6(false)
      setFailed(false)
      setAuthenticating(false)

      setRedirect(true)

      })
      .catch(function (error) {
      setStep2(false) 
      setStep3(false)
      setStep5(false)
      setStep4(false) 
      setStep6(false)
      setAuthenticating(false)
      setFailed(true)
      console.log(error);
      });

    }

  
   
    useEffect(() => {

      function passValidation1() {
        if (amountValidation === '' && tenor !== '') {
          let principal = parseFloat(amount)
          let interest = 0.25 / 100 / 12
          let payments = parseInt(tenor) * 12

          let x = Math.pow(1 + interest, payments) 
          let Monthly = (principal * x * interest) / (x-1)
   
          setMonthly(round(Monthly))
          setTotalPayment(round(Monthly * payments))
          setTotalInterest(round((Monthly * payments) - principal))
          setNext1(false)
        } else {
          setNext1(true)
        }
      }

      passValidation1();

    }, [tenor, amountValidation, amount])

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


    useEffect(() => {

      function passValidation4() {

        if (ippisError === '' && accountError === '' && salary !== "" && workError === '') {
          setNext5(false)
        } else {
          setNext5(true)
        }

      }

      passValidation4()

    }, [ippisError, accountError, salary, workError])

    useEffect(() => {

      function passValidation5() {

        if (passwordError === '' && confirmPasswordError === '') {
          setNext6(false)
        } else {
          setNext6(true)
        }

      }

      passValidation5()

    }, [passwordError, confirmPasswordError])


    useEffect(() => {

      axios.get('https://fathomless-beach-00475.herokuapp.com/apis/v1/get_users_email/')
      .then(function (response) {
        // handle success
        let database_emails = response.data
        database_emails.map((database_email) => {
          if (email === database_email.email) {
            setEmailError('This email is already registered')
            return true
          }
          return false
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
    }, [email])

    useEffect(() => {

      axios.get('https://fathomless-beach-00475.herokuapp.com/apis/v1/get_profiles_phone_number/')
      .then(function (response) {
        // handle success
        let database_numbers = response.data
        database_numbers.map((database_number) => {
          if (number === database_number.phone_number) {
            setNumberError('This phone number is already registered')
            return true
          }
          return false
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
    }, [number])

    useEffect(() => {

      axios.get('https://fathomless-beach-00475.herokuapp.com/apis/v1/get_profiles_ippis_number/')
      .then(function (response) {
        // handle success
        let ippis_numbers = response.data
        ippis_numbers.map((ippis_number) => {
          if (parseInt(ippis) === parseInt(ippis_number.ippis_number)) {
            setIppisError('This IPPIS number is already registered')
            return true
          }
          return false
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
    }, [ippis])


    useEffect(() => {

      axios.get('https://fathomless-beach-00475.herokuapp.com/apis/v1/get_profiles_account_number/')
      .then(function (response) {
        // handle success
        let account_numbers = response.data
        
        account_numbers.map((account_number) => {
          if (parseInt(account) === parseInt(account_number.account_number)) {
            setAccountError('This account number is already registered')
            return true
          }
          return false
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
    }, [account])

    if (redirect) {
      return (
        <Redirect to="/dashboard" />
      )
    }
  
  
  
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
      
            <table className="table table-striped table-bordered table-responsive-lg">
          <tr>
            <td><b>Amount</b></td>
            <td>&#8358; {formattedAmount}</td>
          </tr>
      
          <tr>
      
            <td><b>Duration</b></td>
            <td>{tenor} Months</td>
          </tr>
      
          <tr>
      
            <td><b>Monthly Payment</b></td>
            <td>&#8358; {monthly}</td>
          </tr>

          <tr>
      
            <td><b>Total Payment</b></td>
            <td>&#8358; {totalPayment}</td>
          </tr>

          <tr>
      
            <td><b>Total Interest Payment</b></td>
            <td>&#8358; {totalInterest}</td>
          </tr>
      
          <tr>
      
            <td><b>Loan Start Date</b></td>
            <td>{today}</td>
          </tr>
      
          <tr>
      
            <td><b>Loan End Date</b></td>
            <td>{end}</td>
          </tr>
      
          <tr>
      
            <td><b>Interest per day</b></td>
            <td>0.25%</td>
          </tr>
          
      
      </table>
      
          <p>
          <small>
              By clicking Start Application, I consent to PennyTrust Inc. obtaining information from relevant third parties as may be necessary, on my employment details, salary payment, loans and other related data, to make a decision on my loan application. I also consent to the loan amounts being deducted from my salary at source before credit to my account and any outstanding loans being recovered automatically from any other accounts linked to me in the case of default
            </small>
          </p>
            
            <Button variant="primary" className="btn-4" onClick={handleSubmitClick0}>Previous</Button>
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
      
            <Form autoComplete="off">
            <Container>
              <Row>
              <Col lg={4}>
      
              <Form.Group controlId="">
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
      
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="First Name" value={f_name} onChange={handleFirstNameChange}  />
              <Form.Text className="text-muted">
              <small className="error">{errorFirstName}</small>
              </Form.Text>
            </Form.Group>
      
            </Col>
            <Col lg={4}>
      
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Last Name" value={l_name} onChange={handleLasttNameChange}  />
              <Form.Text className="text-muted">  
              <small className="error">{errorLastName}</small>
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={4}>
      
            <Form.Group controlId="">
              <input type="date" id="start" name="trip-start"
       placeholder="Date of Birth"
       min="1960-12-31" max="2000-12-31" className="form-control" required value={date} onChange={handleDate}></input>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={4}>
      
            <Form.Group controlId="">
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
      
            <Form.Group controlId="">
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
          <br />
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
      
            <Form autoComplete="off">
            <Container>
              <Row>
              <Col lg={6}>
      
              <Form.Group controlId="">
              <Form.Control type="eamil" placeholder="Email" value={email} onChange={handleEmail} />
              <Form.Text className="text-muted">
              <small className="error">{emailError}</small>
              </Form.Text>
            </Form.Group>
              </Col>
            <Col lg={6}>
      
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Phone Number" value={number} onChange={handleNumber} />
              <Form.Text className="text-muted">
              <small className="error">{numberError}</small>
              </Form.Text>
            </Form.Group>
      
            </Col>
            <Col lg={12}>

            <Form.Group controlId="">
            <textarea className="form-control" placeholder="Home Address" value={address} onChange={handleAddress} />
              <Form.Text className="text-muted">
              <small className="error">{addressError}</small>
              </Form.Text>
            </Form.Group>
            <br />
            </Col>
      
            <Col lg={6}>
      
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="City" value={city} onChange={handleCity} />
              <Form.Text className="text-muted">
              <small className="error">{cityError}</small>
              </Form.Text>
            </Form.Group>
            </Col>
      
            <Col lg={6}>
      
            <Form.Group controlId="">
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
          <br />
          <br />
            <Button variant="primary" className="btn-4" onClick={handleSubmitClick4}>Previous</Button>
           <Button variant="primary" className="btn-4" disabled={next4} onClick={handleSubmitClick5}>Next</Button>
          </div>
        
        </Col>
        )
      }

    if (step5) {
      return (
        <Col lg={8} className="apply_form p-3">
        <div className="text-center">
          <big className="apply_number apply_background">1</big>
          <hr className="apply_hr apply_background" />
          <big className="apply_number apply_background">2</big>
          <hr className="apply_hr apply_background" />
          <big className="apply_number apply_background">3</big>
          <hr className="apply_hr apply_background" />
          <big className="apply_number apply_background">4</big>
          <hr className="apply_hr apply_background" />
          <big className="apply_number apply_border">5</big>
        </div>

        <div className="text-dark text-center m-4">
          <h6><strong>Employment Information</strong></h6>
    
          <Form autoComplete="off">
          <Container>
            <Row>
            <Col lg={6}>
    
          <Form.Group controlId="">
            <Form.Control type="text" placeholder="Place of work" value={work} onChange={handleWork} />
            <Form.Text className="text-muted">
            <small className="error">{workError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={6}>
    
          <Form.Group controlId="">
            <Form.Control type="text" placeholder="IPPIS Number" value={ippis} onChange={handleIppis} />
            <Form.Text className="text-muted">
            <small className="error">{ippisError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={6}>
    
          <Form.Group controlId="">
          <Form.Control as="select" value={salary} onChange={(e) => setSalary(e.target.value)}>
            <option value="" hidden>Salary Bank Name</option>
            <option value="access">Access Bank Plc</option>
            <option value="citi">Citibank Nigeria Limited</option>
            <option value="eco">Ecobank Nigeria Plc</option>
            <option value="fidelity">Fidelity Banl Plc</option>
            <option value="monument">First City Monument Bank Limited</option>
            <option value="first">First Bank of Nigeria Limited</option>
            <option value="guaranty">Guaranty Trust Bank Plc</option>
            <option value="keystone">Keystone Bank Limited</option>
            <option value="polaris">Polaris Bank Limited</option>
            <option value="stanbic">Stanbic IBTC Bank Plc</option>
            <option value="standard">Standard Chartered</option>
            <option value="sterling">Sterling Bank Plc</option>
            <option value="titan">Titan Trust Bank Limited</option>
            <option value="union">Union Bank of Nigeria Plc</option>
            <option value="united">United Bank for Afria Plc</option>
            <option value="unity">Unity Bank Plc</option>
            <option value="wema">Wema Bank Plc</option>
            <option value="zenith">Zenith Bank Plc</option>
            
            </Form.Control>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={6}>
    
          <Form.Group controlId="">
            <Form.Control type="text" placeholder="Account Number" value={account} onChange={handleAccount} />
            <Form.Text className="text-muted">
            <small className="error">{accountError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={6}></Col>
    
          </Row>
          </Container>
         
        </Form>
        <br />
        <br />
    
         <Button variant="primary" className="btn-4" onClick={handleSubmitClick6}>Previous</Button>
        <Button variant="primary" className="btn-4" disabled={next5} onClick={handleSubmitClick8}>Next</Button>
        </div>
      </Col>
      )
    }

    if (step6) {
      return (
      <Col lg={8} className="apply_form p-3">
            <div className="text-center">
              <big className="apply_number apply_background">1</big>
              <hr className="apply_hr apply_background" />
              <big className="apply_number apply_background">2</big>
              <hr className="apply_hr apply_background" />
              <big className="apply_number apply_background">3</big>
              <hr className="apply_hr apply_background" />
              <big className="apply_number apply_background">4</big>
              <hr className="apply_hr apply_background" />
              <big className="apply_number apply_background">5</big>
            </div>
            
      
        <div className="text-dark text-center m-4">
          <h6><strong>Almost Complete</strong></h6>
          <Form autoComplete="off">
          <Container>
            <Row>
            <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
            <Form.Text className="text-muted">
            <small className="error">{passwordError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword} />
            <Form.Text className="text-muted">
            <small className="error">{confirmPasswordError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
    
        
    
          </Row>
          </Container>
         
        </Form>
        <br />
        <br />
    
         <Button variant="primary" className="btn-4" onClick={handleSubmitClick7}>Previous</Button>
        <Button variant="primary" className="btn-4" disabled={next6} onClick={handleFinalSubmit}>Submit Application</Button>
        </div>
      </Col>
      )
    }

    if (authenticating) {

      return (
        <Col lg={8} className="text-center apply_form p-3 text-dark">
             <h3>Loading...</h3>
        </Col>
      )

    }

    if (failed) {

      return (
        <Col lg={8} className="text-center apply_form p-3 text-dark">
             <h3>Server Error, Please try again later</h3>
             <br />
             <br />
             <br />
             <Button variant="primary" className="btn-4" onClick={handleSubmitClick7}>Go Back</Button>
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
      
        <Form autoComplete="off">
        <Container>
          <Row>
          <Col lg={6}>
  
        <Form.Group controlId="">
  
          {/* 20,000 <= loan amount <= 1,000,000 */}
  
  
          <Form.Control type="text" placeholder="Loan Amount" value={amount} onChange={handleAmountChange} />
          
          
          <Form.Text className="text-muted">
            <small className="error">{amountValidation}</small>
          </Form.Text>
        </Form.Group>
        </Col>
  
        <Col lg={6}>
  
        <Form.Group controlId="">
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
      <br />
      <br />
      <br />
      
  <Button variant="primary" disabled={next1} className="btn-4" onClick={handleSubmitClick1}>Next</Button>
      </div>
      </Col>
    )
  }

export default Steps
