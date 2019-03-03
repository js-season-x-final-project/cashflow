import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const blog = props => {

    const { auth } = props;
    if (!auth.uid) {
        props.history.push('/auth');
    }

    return(
        <Fragment>
            <Header />
            <h1>Blog</h1>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(withRouter(blog));