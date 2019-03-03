import { ADD_RECORD, ADD_RECORD_ERROR } from '../actions/actionTypes';

// const reducer = (state = {}, action) => {
//     switch (action.type) {
//         case GET_RECORDS:
//             return action.payload;

//         default: return state;
//     }
// }

const recordsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_RECORD:
            console.log('Add record success');
            return state;
        case ADD_RECORD_ERROR:
            console.log('Add record error');
            return state;
        default:
            return state;
    }
}

export default recordsReducer;