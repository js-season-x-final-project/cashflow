import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
// import MainPage from '../MainPage';
import Header from '../../Homepage/Header/Header';
// import { connect } from 'react-redux';

const blog = props => {

    return(
        <Fragment>
            <Header/>
            <h1>Blog</h1>
        </Fragment>
    )
}

export default withRouter(blog);