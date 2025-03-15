import React from 'react'

import './index.scss';

interface ButtonProps {
    text: string;
    backgroundColor? : string;
    type: 'button' | 'submit' | 'reset'
}

const Button : React.FC<ButtonProps> = ({text, backgroundColor, type}) => {
    return (
        <button className="button" style={{backgroundColor: backgroundColor}} type={type}>
            {text}
        </button>
    )
}

export default Button