import React from 'react'

import Button from 'react-bootstrap/Button';





function Step2(props) {
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
      
 <Button variant="primary" className="btn-4">Previous</Button>
 <Button variant="primary" className="btn-4">Start Application</Button>
    </div>
  )
}

export default Step2
