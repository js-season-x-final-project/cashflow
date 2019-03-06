import React from 'react';
import Button from '@material-ui/core/Button';
import {deleteRecord} from '../../actions/recordsActions'
import { connect } from 'react-redux';

const record = props => (
    <div>
        <h3>This is single record</h3>
        <p>{props.category}</p>
        <p>{props.subCategory}</p>
        <p>{props.amount}</p>
        <p>{props.note}</p>
        <p>Date{new Date(props.date).toLocaleDateString()}</p>
        <Button onClick={()=>{props.deleteRecord(props.uid)}}>DELETE</Button>
        <Button>Edit</Button>
    </div>
)

const mapDispatchToProps = dispatch =>{
    return{
        deleteRecord: (idOfRecord) => dispatch(deleteRecord(idOfRecord))
    }
}

export default connect(null, mapDispatchToProps)(record);