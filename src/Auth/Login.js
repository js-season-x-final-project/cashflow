import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { login } from '../actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    backgroundColor: '#00cf8d',
    '&:hover': {
      backgroundColor: '#00cf8d',
    },
  },
});

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  onLogin = event => {
    event.preventDefault();
    this.props.login(this.state);
  }

  checkEmail() {
    if (!emailRegex.test(this.state.email)) {
      
    }
  }

  render() {

    const { classes, loginError } = this.props;

    return (
      <div className="loginWrapper">
        <Button className='backButton' component={Link} to='/'>←Back</Button>
        <h2>Login</h2>
        <form className={classes.container}>
          <TextField
            id="login-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={() => console.log('Yes')}
          />
          <Typography color='error' className='loginEmailError'>
            Some Error Message
          </Typography>
          <TextField
            id="login-password-input"
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
          <Typography color='error' className='loginPasswordError'>
            Some Error Message
          </Typography>
          <Button variant="outlined" className={classes.button} onClick={this.onLogin} >Login</Button>
          {loginError ? <Typography color='error'>{loginError}</Typography> : null}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.user.loginError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials) => dispatch(login(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Login)))