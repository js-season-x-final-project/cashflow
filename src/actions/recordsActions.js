import { ADD_RECORD, ADD_RECORD_ERROR } from './actionTypes';
// import { database } from '../config/firebase';

// export const getRecords = () => {
//     return dispatch => {
//         database.on('value', snapshot => {
//                 dispatch({
//                     type: GET_RECORDS,
//                     payload: snapshot.val()
//                 })
//             }
//         )
//     }
// }

// export const addRecord = record => {
//     return () => database.push(record);
// }

// export const deleteRecord = uid => {
//     return () => database.child(uid).remove();
// }

// export const editRecord = (uid, record) => {
//     return () => database.child(uid).update(record);
// }

export const addRecord = record => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('records').add(record).then(() => {
            dispatch({ type: ADD_RECORD });
        }).catch(err => {
            dispatch({ type: ADD_RECORD_ERROR }, err)
        })
    }
}