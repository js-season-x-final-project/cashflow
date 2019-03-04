import { 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR 
} from '../actions/actionTypes';


export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((response) => {
            dispatch({
                 type: LOGIN_SUCCESS,
                 uid: response.user.uid
            })
        }).catch((error) => {
            dispatch({ type: LOGIN_ERROR, error })
        })
    }
}

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut();
    }
}

export const register = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(async(response) => {
           await firestore.collection('users').doc(response.user.uid).set({
                email: newUser.email
            })
            await dispatch({
                 type: REGISTER_SUCCESS,
                uid: response.user.uid
            });
        }).catch((error) => {
            dispatch({ type: REGISTER_ERROR, error });
        })
    }
}