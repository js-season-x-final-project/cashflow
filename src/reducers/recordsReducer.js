import { ADD_RECORD, ADD_RECORD_ERROR, DELETE_RECORD, DELETE_RECORD_ERROR, EDIT_RECORD, EDIT_RECORD_ERROR } from '../actions/actionTypes';

const recordsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECORD:
      console.log('Add record success');
      return state;
    case ADD_RECORD_ERROR:
      console.error(action.message);
      return state;
    case DELETE_RECORD:
      console.log('Deleted record successful!');
      return state
    case DELETE_RECORD_ERROR:
      console.error(action.message);
      return state
    case EDIT_RECORD:
      console.log('Record edited successful');
      return state
    case EDIT_RECORD_ERROR:
      console.error(action.message);
      return state
    default:
      return state;
  }
}

export default recordsReducer;