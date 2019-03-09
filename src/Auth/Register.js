import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { register } from '../actions/userActions';
import { connect } from 'react-redux';
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

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Register extends Component {

  state = {
    email: '',
    password: '',
    passwordAgain: '',
    emailError: false,
    passwordError: false,
    passwordAgainError: false,
    missingPassword2: false,
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRegister = event => {
    event.preventDefault();
    if (!this.state.emailError && !this.state.passwordError && !this.state.passwordAgainError && this.state.passwordAgain !== '') {
      this.props.register(this.state);
    }
    if (this.state.passwordAgain === '') {
      this.setState({ missingPassword2: true })
    }
  }

  checkEmail() {
    !emailRegex.test(this.state.email) 
    ? 
    this.setState({ emailError: true }) 
    : 
    this.setState({ emailError: false })
  }

  checkPassword() {
    this.state.password.length < 6 
    ? 
    this.setState({ passwordError: true }) 
    : 
    this.setState({ passwordError: false })
  }

  checkPasswordAgain() {
    this.state.passwordAgain !== this.state.password 
    ? 
    this.setState({ passwordAgainError: true }) 
    : 
    this.setState({ passwordAgainError: false, missingPassword2: false })
  }

  render() {

    const { classes, registerError } = this.props;

    return (
      <div className="registerWrapper">
        <h2>Register</h2>
        <form className={classes.container}>
          <TextField
            id="register-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={() => this.checkEmail()}
          />
          {this.state.emailError && <Typography color='error'>
            Not valid email
          </Typography>}
          <TextField
            id="register-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="password"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange}
            onBlur={() => this.checkPassword()}
          />
          {this.state.passwordError && <Typography color='error'>
            Password should be at least 6 character
          </Typography>}
          <TextField
            id="register-passwordAgain-input"
            label="Password Again"
            type="password"
            name="passwordAgain"
            autoComplete="password"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={this.state.passwordAgain}
            onChange={this.handleChange}
            onBlur={() => this.checkPasswordAgain()}
          />
          {this.state.passwordAgainError && <Typography color='error'>
            Mismatching passwords
          </Typography>}
          {this.state.missingPassword2 && <Typography color='error'>
            Please enter password again
          </Typography>}
          <Button variant="outlined" className={classes.button} onClick={this.onRegister}>Register</Button>
          {registerError ? <Typography color='error'>{registerError}</Typography> : null}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerError: state.user.registerError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: newUser => dispatch(register(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));