import React from 'react';

const record = props => (
    <div>
        <h3>This is single record</h3>
        <p>{props.category}</p>
        <p>{props.subCategory}</p>
        <p>{props.amount}</p>
        <p>{props.note}</p>
    </div>
)

export default record;