import React from 'react'
import Button from './../components/Button.jsx'

const EmailDetail = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.emails.map((email, index) =>
            (
              <tr key={index}>
                <td>{email.subject}</td>
                <td><Button value='View' id={index} handleOnClick={props.showEmail} /></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default EmailDetail