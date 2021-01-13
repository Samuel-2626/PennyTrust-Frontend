import React from 'react'

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function Step2() {
  return (
    <div className="text-dark text-center m-4">
      <h3>Loan Breakdown</h3>
      <Link to="/apply/step-1"><Button variant="primary">Previous</Button></Link>
      <Link to="/apply/step-3"><Button variant="primary">Start Application</Button></Link>
    </div>
  )
}

export default Step2
