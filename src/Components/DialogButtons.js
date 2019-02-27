import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

const dialogButtons = props => (
    <DialogActions>
        <Button onClick={props.handleClose} color="primary">
            Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary">
            Add
        </Button>
    </DialogActions>
)

export default dialogButtons;