import React, { Component, Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTabs from './DialogTabs';

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

        return (
            <Fragment>
                
                <Fab size="small" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                    <AddIcon />
                </Fab>

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

export default CreateDialog;