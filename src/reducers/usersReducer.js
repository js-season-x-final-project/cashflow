import {
    ADD_RECORD,
} from '../actions/actionTypes';

const initialState =  {
    user: {
        email: '',
        // records: new Map(),
        records: [],
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_RECORD: {
        //     const newRecords = new Map(state.user.records);
        //     if (newRecords.has(action.key)) {
        //         const day = newRecords.get(action.key);
        //         const newDay = [ ...day, action.value ];
        //         newRecords.set(action.key, newDay);
        //     } else {
        //         newRecords.set(action.key, [action.value]);
        //     }
        //     const newUser = { ...state.user, records: newRecords };
        //     return { ...state, user: newUser };
        // };
        case ADD_RECORD: {
            const newRecords = [ ...state.user.records, action.value ];
            const newUser = { ...state.user, records: newRecords };
            return { ...state, user: newUser };
        }

        default: return state;
    }
}


export default reducer;