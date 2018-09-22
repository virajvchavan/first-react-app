import React from 'react'
import Button from './../components/Button.jsx'

const EmailDetail = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.emails.map((email, index) =>
            (
              <tr key={email.id}>
                <td>{email.subject}</td>
                <td><Button value='View' id={email.id} handleOnClick={props.showEmail} /></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default EmailDetail