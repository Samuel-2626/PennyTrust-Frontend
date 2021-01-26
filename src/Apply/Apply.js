import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Steps from '../Steps/Steps'



function Apply() {
  return (
    <div className="apply">

    <div className="p-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="orange-text welcome"><strong>Welcome. Get a loan in 30 minutes!</strong></h2>
            <p className="grey-text">
            PennyTrust Inc. is a fast- growing licensed micro lender in Nigeria. Based in Lagos, Nigeria. PCSL provides personal loans to salaried workers across the country through its innovative technology platform (PennyTrust TM). Today we help low to middle income earners gain quick, convenient, and secure access to loans that they desperately need.
            </p>
          </Col>
        
            <Steps />
        
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Apply
