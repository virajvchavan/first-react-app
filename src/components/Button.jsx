import React from 'react';

const Button = props => {
  return (
    // JSX element
    <button id={props.id} className='btn btn-primary' onClick={props.handleOnClick}>{props.value}</button>
  );
};

export default Button;
