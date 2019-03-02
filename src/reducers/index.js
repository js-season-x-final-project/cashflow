import { combineReducers } from 'redux';
import recordsReducer from './recordsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    records: recordsReducer,
    user: userReducer,
});

export default rootReducer;