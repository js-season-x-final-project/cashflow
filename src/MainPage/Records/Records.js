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
    recordsSpace: {
        width: 920,
        margin: 'auto'
    },
}

class Records extends Component {
    
    render() {

        const { classes, auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/auth' />
        }

        return (
            <Fragment>
                <Header />
                <Paper className={classes.recordsSpace}>
                    {this.props.records ? Object.entries(this.props.records).map(rec => (           
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
    return {
        records: state.firestore.ordered.records,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records' }
    ])
)(withStyles(styles)(Records));