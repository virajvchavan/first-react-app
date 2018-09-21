import React, { Component } from 'react'
import LoginForm from './../components/LoginForm.jsx'
import Dashboard from './Dashboard.jsx'

class LoginContainer extends React.Component {

  state = {
    email: null,
    password: null,
    isSubmitted: false,
    isValid: false,
    errors: {
      email: null,
      password: null
    }
  }

  handleOnChange = (evt) => {
    this.setState(
      { 
        // evt gets all the info related to the element on which handleOnChange is originally called on
        [evt.target.name] : evt.target.value 
      }, 
      () => {
        // callback
        console.log(this.state.email, this.state.password);
      });
  }

  logout = (evt) => {
    console.log('logout called');
    this.setState({
      isSubmitted: false
    },
    () => {
      console.log('isSubmitted', this.state.isSubmitted);
    });
  }


  onSubmit =(evt) => {
    evt.preventDefault();

    this.setState(
    {
      isSubmitted: true
    },
    () => {
      // callback
      console.log('isSubmitted', this.state.isSubmitted);
      console.log('Submitting ', this.state.email, this.state.password, 'to the API');

    });
  }

  render() {
    if(this.state.isSubmitted){
      return ( <Dashboard logout={this.logout} /> );
    }
    return (
      <LoginForm handleOnChange={this.handleOnChange} onSubmit={this.onSubmit} />
    );
  }
}

export default LoginContainer;