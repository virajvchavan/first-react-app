import React from 'react';
import Button from './Button.jsx'
import Input from './Input.jsx'
import Label from './Label.jsx'

const LoginForm = props => {
  return (
    // JSX element
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={props.onSubmit}>
          <div>
            <Label name='Email' />
            <Input handleOnChange={ props.handleOnChange } name='email' />
          </div>
          <div>
            <Label name='Password' />
            <Input inputType='password' handleOnChange={ props.handleOnChange } name='password' />
          </div>

          <div>
            <Button value='Submit' />
            <Button value='Cancel'/>
          </div>
        </form>
      </div>
    </div>
  );

};

export default LoginForm;
