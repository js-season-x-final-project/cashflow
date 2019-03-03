import { combineReducers } from 'redux';
import recordsReducer from './recordsReducer';
import userReducer from './userReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    records: recordsReducer,
    user: userReducer,
    firestore: firestoreReducer,
});

export default rootReducer;