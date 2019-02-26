import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './Register.css';


const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        width: '100%',
        paddingLeft: '60px',
        paddingRight: '60px',
    },
    textField: {
        width: '100%',
    },
    button: {
        height: '50px',
        marginTop: '30px',
        borderRadius: '25px',
        color: 'white',
        backgroundColor: '#0080BD',
        '&:hover': {
            backgroundColor: '#0080BD',
        },
    },
});


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

        const { classes } = this.props;

        return (
            <div className="registerWrapper">
                <h2>Register</h2>
                <form className={classes.container}>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.setEmail}
                        />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="password"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.setPassword}
                        />
                    <TextField
                        id="outlined-passwordAgain-input"
                        label="Password Again"
                        type="password"
                        name="passwordAgain"
                        autoComplete="password"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.setPasswordAgain}
                        />
                    <Button variant="outlined" className={classes.button} onClick={this.onRegister}>Register</Button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);