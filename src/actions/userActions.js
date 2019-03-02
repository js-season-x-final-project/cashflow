import { auth } from '../config/firebase';
import { GET_USER, USER_STATUS } from '../actions/actionTypes';

export const getUser = () => {
    return dispatch => {
        dispatch({
            type: USER_STATUS,
            payload: true
        });
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            });
            dispatch({
                type: USER_STATUS,
                payload: false
            })
        })
    }
}

export const register = (username, password) => {
    return () => auth.createUserWithEmailAndPassword(username, password);
}

export const login = (username, password) => {
    return () => auth.signInWithEmailAndPassword(username, password).then(res => console.log(res));
}

export const logout = () => {
    return () => auth.signOut().then(res => console.log(res));
}