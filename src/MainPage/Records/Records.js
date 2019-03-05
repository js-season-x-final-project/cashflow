import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {calculateExpenses, calculateIncomes,differentiateRecords} from '../../actions/analyticsActions'

const styles = {
    recordsExpenses: {
        width: 920,
        margin: 'auto'
    },
}

class Records extends Component {
    componentDidUpdate(){
        this.props.differentiateRecords(this.props.recs);
        this.props.calculateExpenses();
        this.props.calculateIncomes();
    }
    render() {
        const { classes, auth } = this.props;
        if (!auth.uid) {    
            return <Redirect to='/auth' />
        }
        return (
            <Fragment>
                <Header />              
                <Paper className={classes.recordsExpenses}>
                    {this.props.records ? Object.entries(this.props.records).map((rec) => {
                        return rec[1] !== null ? (<Fragment key={rec[0]}>
                            <Record uid={rec[0]} { ...rec[1] } />
                            <Divider />
                        </Fragment> ) : null
                    })
                        : null}
                </Paper>
            </Fragment> 
        )
    }
}

const mapStateToProps = state => {
    const hash = state.firebase.auth.uid
    return {
        records: state.firestore.data.users && hash ? state.firestore.data.users[hash].records : null,
        recs: state.firestore.ordered.users ? state.firestore.ordered.users[0].records : null,
        auth: state.firebase.auth ? state.firebase.auth : null
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        differentiateRecords: (allRecs) => dispatch(differentiateRecords(allRecs)),
        calculateExpenses: () => dispatch(calculateExpenses()),
        calculateIncomes: () => dispatch(calculateIncomes()),
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props)=>{
        return props.auth.uid ? [
        {collection: 'users',
         doc: props.auth.uid ,
         subcollections:[
             {collection:'records'}
         ]
        }
        ]: []})
)(withStyles(styles)(Records));