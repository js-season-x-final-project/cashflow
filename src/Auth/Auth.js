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

    // registerUser = (username, password) => {
    //     auth.createUserWithEmailAndPassword(username, password).then(res => console.log(res)).catch(err => console.log(err.message));
    // }

    // loginUser = (username, password) => {
    //     auth.signInWithEmailAndPassword(username, password).then(res => console.log(res)).catch(err => console.log(err.message));
    // }

    render() {
        return (
            <div className="authWrapper">
                <Login loginUser={this.loginUser} />
                <Register registerUser={this.registerUser} />
            </div>
        )
    }
}

export default Auth;