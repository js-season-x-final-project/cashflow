import { ADD_RECORD, ADD_RECORD_ERROR,DELETE_RECORD } from './actionTypes';

export const addRecord = record => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const uid = getState().firebase.auth.uid;
        console.log(uid);
        firestore.collection('users').doc(uid).collection('records').add(record).then(() => {
            dispatch({ type: ADD_RECORD });
        }).catch(err => {
            dispatch({ type: ADD_RECORD_ERROR }, err)
        })
    }
}

export const deleteRecord = record =>{
    return (dispatch,getState, { getFirestore })=>{
        const firestore = getFirestore();
        console.log(record);
        firestore.collection('records').doc(record.toString()).delete().then(()=>{
            dispatch({type: DELETE_RECORD})
        }).catch(err=>{
            console.log(err)
        })
    }
}