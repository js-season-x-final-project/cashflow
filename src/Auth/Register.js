import React, { Component } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './Register.css';

class Register extends Component {

    state = {
        email: '',
        password: '',
        passwordAgain: ''
    }

    setEmail = event => {
        const value = event.target.value;
        this.setState({ email: value });
    }

    setPassword = event => {
        const value = event.target.value;
        this.setState({ password: value });
    }

    setPasswordAgain = event => {
        const value = event.target.value;
        this.setState({ passwordAgain: value });
    }

    onRegister = event => {
        event.preventDefault();
        this.setState({ email: '', password: '', passwordAgain: '' });
    }

    render() {
        return (
            <div className="registerWrapper">
                <h1>Register</h1>
                <Input type={'email'} name={'register-email'} value={this.state.email} onChange={this.setEmail} placeholder={'Email'} />
                <Input type={'password'} name={'register-password'} value={this.state.password} onChange={this.setPassword} placeholder={'Password'} />
                <Input type={'password'} name={'register-passwordAgain'} value={this.state.passwordAgain} onChange={this.setPasswordAgain} placeholder={'Password Again'} />
                <Button buttonText="Register" onClick={this.onRegister} />
            </div>
        )
    }
}

export default Register;