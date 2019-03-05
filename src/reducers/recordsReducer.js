import { ADD_RECORD, ADD_RECORD_ERROR, DELETE_RECORD } from '../actions/actionTypes';

const recordsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_RECORD:
            console.log('Add record success');
            return state;
        case ADD_RECORD_ERROR:
            console.log('Add record error');
            return state;
        case DELETE_RECORD:
            console.log('Deleted record successful!');
            return state
        default:
            return state;
    }
}

export default recordsReducer;