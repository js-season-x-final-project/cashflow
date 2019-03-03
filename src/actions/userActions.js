import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/actionTypes';

export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS })
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
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(() => {
            dispatch({ type: REGISTER_SUCCESS });
        }).catch((error) => {
            dispatch({ type: REGISTER_ERROR, error });
        })
    }
}