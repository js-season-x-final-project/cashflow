import React from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';

const auth = () => (
    <div className="authWrapper">
        <Login />
        <Register />
    </div>
)

export default auth;