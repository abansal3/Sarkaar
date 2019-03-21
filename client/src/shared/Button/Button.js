import React from 'react';
import './Button.scss';

const Button = ({id, text, className, onClick}) => (
    <button id={id} className={className} onClick={onClick}>{text}</button>
)

export default Button;
