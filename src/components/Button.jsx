import React from 'react';

const Button = props => {
  return (
    // JSX element
    <button className='btn btn-primary form-control' onClick={props.logout}>{props.value}</button>
  );
};

export default Button;
