import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }


const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <Container type="button" {...props}>{children}</Container>
)

export default Button;
