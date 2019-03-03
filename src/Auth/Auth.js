import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';
// import { auth } from '../config/firebase'


class Auth extends Component {
    
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className="authWrapper">
                <Login />
                <Register />
            </div>
        )
    }
}

export default Auth;