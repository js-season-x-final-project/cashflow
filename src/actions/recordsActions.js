import { ADD_RECORD, ADD_RECORD_ERROR, DELETE_RECORD, DELETE_RECORD_ERROR, EDIT_RECORD, EDIT_RECORD_ERROR } from './actionTypes';

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

export const deleteRecord = record => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let state = getState();
    const userId = state.firebase.auth.uid;
    firestore.collection('users').doc(userId).collection('records').doc(record).delete()
      .then(() => {
        console.log(getState().firestore.ordered.users[0]);
        dispatch({ type: DELETE_RECORD })
      })
      .catch(err => {
        dispatch({ type: DELETE_RECORD_ERROR }, err)
      })
  }
}

export const editRecord = (recordID, record) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();
    const userId = state.firebase.auth.uid;
    firestore.collection('users').doc(userId).collection('records').doc(recordID).set(record)
      .then(() => {
        dispatch({ type: EDIT_RECORD })
      })
      .catch(err => {
        dispatch({ type: EDIT_RECORD_ERROR}, err)
      })
  }
}
