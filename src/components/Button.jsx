import React from 'react';

const Button = props => {
  return (
    // JSX element
    <button id={props.id} className='btn btn-primary form-control' onClick={props.handleOnClick}>{props.value}</button>
  );
};

export default Button;
