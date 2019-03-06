import React, { Component, Fragment } from 'react';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  recordsExpenses: {
    width: 920,
    margin: 'auto'
  },
}

class Records extends Component {
  render() {

    const { classes } = this.props;

    return (
      <Fragment>
        <Paper className={classes.recordsExpenses}>
          {this.props.records ? Object.entries(this.props.records).map((rec) => {
            return(rec[1] ?
            <Fragment key={rec[0]}>
              <Record uid={rec[0]} {...rec[1]} />
              <Divider />
            </Fragment> : null)
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
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}


export default connect(mapStateToProps)(withStyles(styles)(Records));