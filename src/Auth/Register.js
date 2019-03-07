import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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


class Register extends Component {

  state = {
    email: '',
    password: '',
    passwordAgain: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRegister = event => {
    event.preventDefault();

    this.props.register(this.state);
    this.setState({ email: '', password: '', passwordAgain: '' });
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
          />
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
          />
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
          />
          <Button variant="outlined" className={classes.button} onClick={this.onRegister}>Register</Button>
          {registerError ? <p>{registerError}</p> : null}
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