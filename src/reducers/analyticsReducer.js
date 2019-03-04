import { CALCULATE_EXPENSES, CALCULATE_INCOMES } from "../actions/actionTypes";

const initialState ={
    value: 0
}

const analyticsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CALCULATE_EXPENSES: 
        case CALCULATE_INCOMES:
        default:
    }
}