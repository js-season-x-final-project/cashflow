import {
    ADD_EXPENSE,
    ADD_INCOME,
} from '../actions/actionTypes';

const initialState =  {
    user: {
        email: '',
        expenses: [],
        incomes: [],
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            const newAllExpenses = [ ...state.user.expenses, action.expense];
            const newUser = { ...state.user, expenses: newAllExpenses};
            return {...state, user: newUser};
            // return {...state, user: { ...state.user, expenses: [ ...state.user.expenses, action.expense ]}}
        };

        case ADD_INCOME: {
            const newAllIncomes = [ ...state.user.incomes, action.income];
            const newUser = { ...state.user, incomes: newAllIncomes};
            return {...state, user: newUser};
        }

        default: return state;
    }
}


export default reducer;