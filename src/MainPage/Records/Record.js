import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTabs from '../../Components/Dialog/DialogTabs';
import { deleteRecord } from '../../actions/recordsActions';
import { connect } from 'react-redux';
import classes from './Record.module.css';

class Record extends Component {

  state = {
    record: {
      id: this.props.id,
      type: this.props.type,
      category: this.props.category,
      subCategory: this.props.subCategory,
      amount: this.props.amount,
      currency: this.props.currency,
      date: this.props.date,
      note: this.props.note,
    },
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>

        <div className={classes.mainWrapper}>
          <div className={classes.leftSide}>
            <h2>{this.props.category}</h2>
            <h4>{this.props.subCategory}</h4>
            <p>Date{this.props.date}</p>
            <p>Note: {this.props.note}</p>
          </div>
          <div className={classes.rightSide}>
          <div className={classes.buttons}>
            <Button onClick={this.handleClickOpen}>Edit</Button>
            <Button onClick={() => { this.props.deleteRecord(this.props.uid) }}>DELETE</Button>
          </div>
          <div className={classes.amount}>
            <p>{this.props.amount}</p>
          </div>
          </div>
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >

          <DialogTabs handleClose={this.handleClose} type={this.state.record.type} record={this.state.record} uid={this.props.uid} />

        </Dialog>

      </Fragment>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    deleteRecord: (idOfRecord) => dispatch(deleteRecord(idOfRecord))
  }
}

export default connect(null, mapDispatchToProps)(Record);