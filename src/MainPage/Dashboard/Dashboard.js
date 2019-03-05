import React, { Fragment } from 'react';
import MainPage from '../MainPage'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


const dashboard = props => {
    return (
        <Fragment>
            <MainPage />
            <h1>dashboard</h1>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(withRouter(dashboard));