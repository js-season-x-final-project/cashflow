import { combineReducers } from 'redux';
import recordsReducer from './recordsReducer';
import userReducer from './userReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import analyticsReducer  from './analyticsReducer';

const rootReducer = combineReducers({
    statisticData: analyticsReducer,
    records: recordsReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;