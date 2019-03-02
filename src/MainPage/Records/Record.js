import React from 'react';
import Button from '@material-ui/core/Button';
import { deleteRecord } from '../../actions/recordsActions';
import { connect } from 'react-redux';

const record = props => (
    <div>
        <h3>This is single record</h3>
        <p>{props.category}</p>
        <p>{props.subCategory}</p>
        <p>{props.amount}</p>
        <p>{props.note}</p>
        <Button onClick={() => props.deleteRecord(props.uid)}>DELETE</Button>
    </div>
)

export default connect(null, { deleteRecord })(record);