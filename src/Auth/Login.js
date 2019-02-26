import React, { Component } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './Login.css';

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }

    setEmail = event => {
        const value = event.target.value;
        this.setState({ email: value });
    }

    setPassword = event => {
        const value = event.target.value;
        this.setState({ password: value });
    }

    onLogin = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    render() {
        return (
            <div className="loginWrapper">
                <h1>Login</h1>
                <Input type={'email'} name={'login-email'} value={this.state.email} onChange={this.setEmail} placeholder={'Email'} />
                <Input type={'password'} name={'login-password'} value={this.state.password} onChange={this.setPassword} placeholder={'Password'} />
                <Button buttonText={'Login'} onClick={this.onLogin} />
            </div>
        )
    }
}

export default Login;