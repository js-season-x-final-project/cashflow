import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login } from '../actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import './Login.css';


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
        backgroundColor: '#00aa70',
        '&:hover': {
            backgroundColor: '#00aa70',
        },
    },
});


class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }

    // componentWillMount() {
    //     if (this.props.user !== null) {
    //         this.props.history.push('/dashboard');
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.user !== null) {
    //         nextProps.history.push('/dashboard');
    //     }
    // }

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
        this.props.login(this.state.email, this.state.password);
        this.setState({ email: '', password: ''});
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="loginWrapper">
                <h2>Login</h2>
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
                    <Button variant="outlined" className={classes.button} onClick={this.onLogin} >Login</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.loggedUser,
    }
}

export default connect(mapStateToProps, { login })(withStyles(styles)(Login));