import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Route, Switch } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Finish from './Finish';

function Apply() {
  return (
    <div className="apply">

    <div className="p-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="orange-text"><strong>Welcome. Get a loan in 30 minutes!</strong></h2>
            <p className="grey-text">
            PennyTrust Inc. is a fast- growing licensed micro lender in Nigeria. Based in Lagos, Nigeria. PCSL provides personal loans to salaried workers across the country through its innovative technology platform (PennyTrust TM). Today we help low to middle income earners gain quick, convenient, and secure access to loans that they desperately need.
            </p>
          </Col>
          <Col lg={8} className="apply_form p-3">
            <div className="text-center">
              <big className="apply_number">1</big>
              <hr className="apply_hr" />
              <big className="apply_number">2</big>
              <hr className="apply_hr" />
              <big className="apply_number">3</big>
              <hr className="apply_hr" />
              <big className="apply_number">4</big>
              <hr className="apply_hr" />
              <big className="apply_number">5</big>
            </div>
            <Switch>
              <Route path="/apply/step-1" component={Step1} />
              <Route path="/apply/step-2" component={Step2} />
              <Route path="/apply/step-3" component={Step3} />
              <Route path="/apply/step-4" component={Step4} />
              <Route path="/apply/step-5" component={Step5} />
              <Route path="/apply/finish" component={Finish} />
            </Switch>

          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Apply
