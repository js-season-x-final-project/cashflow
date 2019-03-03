import React from 'react';
import Login from './Login';
import Register from './Register';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './Auth.css';

const auth = props => {
    
    const { auth } = props;
    if (auth.uid) {
        props.history.push('/dashboard');
    }

    return (
        <div className="authWrapper">
            <Login />
            <Register />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(withRouter(auth));