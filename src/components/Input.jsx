import React from 'react';

const Input = props => {
  return (
    // JSX element
    <input 
      type = { props.inputType }
      className = 'form-control'
      required
      onChange = { props.handleOnChange }
      name = { props.name }
      />
  );
};

export default Input;
