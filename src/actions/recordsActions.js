import { ADD_RECORD, ADD_RECORD_ERROR,DELETE_RECORD } from './actionTypes';
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
        const uid = getState().firebase.auth.uid;
        firestore.collection('users').doc(uid).collection('records').add(record)
        .then(() => {
            dispatch({ type: ADD_RECORD });
        })
        .catch(err => {
            dispatch({ type: ADD_RECORD_ERROR }, err)
        })
    }
}

export const deleteRecord = record =>{
    return (dispatch,getState, { getFirestore })=>{
        const firestore = getFirestore();
        let state = getState();
        console.log(record);
        const userId = state.firebase.auth.uid;
        firestore.collection('users').doc(userId).collection('records').doc(record).delete()
        .then(()=>{
            dispatch({type: DELETE_RECORD})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}