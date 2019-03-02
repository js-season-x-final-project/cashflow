import { GET_RECORDS } from './actionTypes';
import { database } from '../config/firebase';

export const getRecords = () => {
    return dispatch => {
        database.on('value', snapshot => {
                dispatch({
                    type: GET_RECORDS,
                    payload: snapshot.val()
                })
            }
        )
    }
}

export const addRecord = record => {
    return () => database.push(record);
}

export const deleteRecord = uid => {
    return () => database.child(uid).remove();
}