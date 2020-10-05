import React from 'react';
import InputStyle from './input.style';

const Input = ({ 
  type,
  name,
  id,
  placeholder, 
  ref,
  text
  }) => (
  <InputStyle 
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    ref={ref}
  >
    {text}
  </InputStyle>
);

export default Input;