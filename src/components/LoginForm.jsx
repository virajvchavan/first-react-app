import React from 'react';
import Button from './Button.jsx'
import Input from './Input.jsx'
import Label from './Label.jsx'

const LoginForm = props => {
  return (
    // JSX element
    <div className='card'>
      <div className='card-body'>
        <form className='form-horizontal' onSubmit={props.onSubmit}>
          <div className='form-group'>
            <Label name='Email: ' />
            <div className='col-md-8'>
              <Input handleOnChange={ props.handleOnChange } name='email' />
            </div>
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
  );

};

export default LoginForm;
