import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const dashboard = props => {

    const { auth } = props;
    if (!auth.uid) {
        props.history.push('/auth');
    }

    return(
        <Fragment>
            <Header />
            <h1>dashboard</h1>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}
 export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>{
        return props.auth.uid ? [
        {collection: 'users',
         doc: props.auth.uid ,
         subcollections:[
             {collection:'records'}
         ]
        }
        ]: []})
)(withRouter(dashboard));