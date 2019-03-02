import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { getRecords } from '../../actions/recordsActions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    recordsSpace: {
        width: 920,
        margin: 'auto'
    },
}

class Records extends Component {

    componentDidMount() {
        this.props.getRecords();
    }
    
    render() {

        const { classes } = this.props;

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

const mapStateToProps = (state) => {
    return {
        records: state.records,
    }
}

export default connect(mapStateToProps, { getRecords })(withStyles(styles)(Records));