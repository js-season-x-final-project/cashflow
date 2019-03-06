import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTabs from '../../Components/Dialog/DialogTabs';
import { deleteRecord } from '../../actions/recordsActions';
import { connect } from 'react-redux';

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

        <div>
          <h3>This is single record</h3>
          <p>{this.state.record.category}</p>
          <p>{this.state.record.subCategory}</p>
          <p>{this.state.record.amount}</p>
          <p>{this.state.record.note}</p>
          <p>Date{this.state.record.date}</p>
          <Button onClick={() => { this.props.deleteRecord(this.props.uid) }}>DELETE</Button>
          <Button onClick={this.handleClickOpen}>Edit</Button>
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