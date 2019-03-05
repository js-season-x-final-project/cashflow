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

const styles = {
    recordsExpenses: {
        width: 920,
        margin: 'auto'
    },
}

class Records extends Component {
shouldComponentUpdate(){
    console.log('[RECORDS] should Component update');
    return true
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
                    {console.log(this.props)}
                    {this.props.expenses ? Object.entries(this.props.expenses).filter(rec=> rec[1].type ==='expense').map((rec) => (   
                        <Fragment key={rec[0]}>
                            <Record uid={rec[0]} { ...rec[1] } />
                            <Divider />
                        </Fragment>
                        ))
                        : null}
                </Paper>
            </Fragment> 
        )
    }
}

const mapStateToProps = state => {
    const hash = state.firebase.auth.uid
    return {
        expenses: state.firestore.data.users && hash ? state.firestore.data.users[hash].records : null,
        auth: state.firebase.auth ? state.firebase.auth : null
    }
}

// export default connect(mapStateToProps)(withStyles(styles)(Records))

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
)(withStyles(styles)(Records));