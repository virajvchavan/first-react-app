import React from 'react'

const EmailDetail = props => {
  return (
    <div>
    <h1>{props.email && props.email.subject}</h1>
    <p>{props.email && props.email.body}</p>
    </div>
  )
}

export default EmailDetail