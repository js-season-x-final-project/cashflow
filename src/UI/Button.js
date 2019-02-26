import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <button className="authButton" onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default button;