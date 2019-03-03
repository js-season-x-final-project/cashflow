import { combineReducers } from 'redux';
import recordsReducer from './recordsReducer';
import userReducer from './userReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    records: recordsReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;