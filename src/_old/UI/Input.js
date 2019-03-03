import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div className="input">
            <h5>{props.placeholder}</h5>
            <input 
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                style={props.style}
            />
        </div>
    )
}

export default input;