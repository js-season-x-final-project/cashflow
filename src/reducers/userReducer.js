import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/actionTypes';

const initialState = {
    loginError: null,
    registerError: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null,
                uid: action.uid
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.error.message,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerError: null,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registerError: action.error.message
            }

        default: return state;
    }
}

export default userReducer;