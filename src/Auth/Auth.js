import React from 'react';
import Login from './Login';
import Register from './Register';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import classes from './Auth.module.css';

const auth = props => {

  const { auth } = props;
  if (auth.uid) {
    props.history.push('/main/dashboard');
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.logo}>CASHFLOW</h1>
      <div className={classes.authWrapper}>
        <Login />
        <Register />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(withRouter(auth));