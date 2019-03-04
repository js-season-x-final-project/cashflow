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
                <div>
                     <p>Total expenses: {props.records.reduce((acc,c2)=>{return acc + Number(c2.amount)},0)} лв.</p>
                </div>
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