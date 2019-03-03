import React from 'react';
import Button from '@material-ui/core/Button';

const record = props => (
    <div>
        <h3>This is single record</h3>
        <p>{props.category}</p>
        <p>{props.subCategory}</p>
        <p>{props.amount}</p>
        <p>{props.note}</p>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
    </div>
)

export default record;