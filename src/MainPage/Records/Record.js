import React, { Component, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTabs from '../../Components/Dialog/DialogTabs';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
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

          <div style={this.props.type === 'income' ? { backgroundColor: '#00cf8d' } : { backgroundColor: 'red' }} className={classes.indicator}></div>

          <div className={classes.leftSide}>
            <h3 className={classes.text}>{this.props.category}</h3>
            <h5 className={classes.text}>{this.props.subCategory}</h5>
            <p className={classes.text}>Date: {this.props.date}</p>
            <div className={classes.note}>
              <p>{this.props.note}</p>
            </div>
          </div>

          <div className={classes.rightSide}>
            <div className={classes.buttons}>
              <IconButton onClick={this.handleClickOpen}>
                <Edit fontSize="small" />
              </IconButton>
              <IconButton onClick={() => { this.props.deleteRecord(this.props.uid) }}>
                <Delete fontSize="small" />
              </IconButton>
            </div>
            <div className={classes.amount}>
              <h4 style={this.props.type === 'income' ? { color: '#00cf8d' } : { color: 'red' }}>
                {this.props.type === 'income' ? '+ ' : '- '}
                {this.props.amount}
                <span className={classes.currency}> {this.props.currency}</span>
              </h4>
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