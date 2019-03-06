import React, { Component, Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTabs from '../../../Components/Dialog/DialogTabs';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tooltip: {
    fontSize: 12,
    color: '#00aa70',
    backgroundColor: 'white'
  },
}

class CreateDialog extends Component {

  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;

    return (
      <Fragment>

        <Tooltip title="New Record" classes={{ tooltip: classes.tooltip }}>
          <Fab size="small" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
            <AddIcon />
          </Fab>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >

          <DialogTabs handleClose={this.handleClose} />

        </Dialog>

      </Fragment>
    )
  }
}

export default withStyles(styles)(CreateDialog);