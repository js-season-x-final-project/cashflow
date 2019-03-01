import {
    ADD_EXPENSE,
    ADD_INCOME,
} from './actionTypes';

export const addExpense = expense => {
    return {
        type: ADD_EXPENSE,
        expense,
    }
}

export const addIncome = income => {
    return {
        type: ADD_INCOME,
        income,
    }
}