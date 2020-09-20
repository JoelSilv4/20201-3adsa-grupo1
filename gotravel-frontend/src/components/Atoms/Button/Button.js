import React from 'react';
import { ButtonWrapper } from './Button.style'

const Button = ({text, textColor}) => (
    <ButtonWrapper color={textColor}>{text}</ButtonWrapper>
)

export default Button;