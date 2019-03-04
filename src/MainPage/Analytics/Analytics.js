import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const analytics = props => {

    const { auth } = props;
    if (!auth.uid) {
        props.history.push('/auth');
    }

    return(
        <Fragment>
            <Header />
            <h1>Analytics</h1>
            {props.records ? props.records.forEach(rec=>{
                console.log(rec);
            })
            : null}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        records: state.firestore.ordered.users ? state.firestore.ordered.users[0].records : null,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(withRouter(analytics));