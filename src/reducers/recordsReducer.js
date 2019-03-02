import { GET_RECORDS } from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RECORDS:
            return action.payload;

        default: return state;
    }
}


export default reducer;