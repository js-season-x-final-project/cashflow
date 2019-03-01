import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    recordsSpace: {
        width: 920,
        margin: 'auto'
    },
}

const records = props => {

    const { classes } = props;

    return (
        <Fragment>
            <Header />
            <Paper className={classes.recordsSpace}>
                {/* {props.records.forEach(day =>
                    day.map(rec => 
                    <Record key={rec.id} { ...rec } />
                    )
                )} */}
                {props.records.map(rec => (
                <Fragment>
                    <Record key={rec.id} { ...rec } />
                    <Divider />
                </Fragment>
                ))}
            </Paper>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        records: state.user.records,
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(records));