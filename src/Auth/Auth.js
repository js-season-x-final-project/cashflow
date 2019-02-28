import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCjShH26nMkntuR_QMEcDC8fJ1YZ8RKqZ8",
    authDomain: "season-x-final.firebaseapp.com",
    databaseURL: "https://season-x-final.firebaseio.com",
    projectId: "season-x-final",
    storageBucket: "season-x-final.appspot.com",
    messagingSenderId: "999238962664"
};
firebase.initializeApp(config);

const auth = firebase.auth();

class Auth extends Component {
    
    state = {
        username: '',
        password: ''
    }

    registerUser = (username, password) => {
        auth.createUserWithEmailAndPassword(username, password).then(res => console.log(res)).catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="authWrapper">
                <Login />
                <Register registerUser={this.registerUser} />
            </div>
        )
    }
}

export default Auth;