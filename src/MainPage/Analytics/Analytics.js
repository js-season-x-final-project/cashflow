import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {calculateExpenses} from '../../actions/analyticsActions'

const analytics = props => {

    const { auth } = props;
    if (!auth.uid) {
        props.history.push('/auth');
    }

    props.calculateExpenses(props.records);
    
    return(
        <Fragment>
            <Header />
            <h1>Analytics</h1>                 
                <div>
                     {/* <p>Total expenses: {props.records.reduce((acc,c2)=>{return acc + Number(c2.amount)},0)} лв.</p> */}
                     <p>Total expenses: {props.expenses} лв.</p>
                </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        expenses: state.statisticData.expenses,
        records: state.firestore.ordered.users ? state.firestore.ordered.users[0].records : null,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        calculateExpenses: (someArray) => dispatch(calculateExpenses(someArray))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(analytics));