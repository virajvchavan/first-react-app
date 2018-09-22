import React from 'react';
import Button from './Button.jsx'
import Input from './Input.jsx'
import Label from './Label.jsx'

const LoginForm = props => {
  return (
    // JSX element
    <div className='card'>
      <div className='card-body'>
          <div className='login_form'>
            <form onSubmit={props.onSubmit}>
              <div className='form-group'>
                <Label name='Email: ' />
                <Input handleOnChange={ props.handleOnChange } name='email' />
              </div>
              <div className='form-group'>
                <Label name='Password: ' />
                <Input inputType='password' handleOnChange={ props.handleOnChange } name='password' />
              </div>
              <div className='form-group'>
                <Button value='Submit' />
                <Button value='Cancel'/>
              </div>
            </form>
          </div>
        </div>
      </div>
  );

};

export default LoginForm;
