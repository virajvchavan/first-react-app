import React from 'react'
import Button from './../components/Button.jsx'

const Dashboard = props => {
  return (
    <div>
    <h1>The Dashboard</h1>
    <Button value='Logout' logout={props.logout} />
    </div>
  )
}

export default Dashboard