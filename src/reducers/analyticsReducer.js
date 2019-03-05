import { CALCULATE_EXPENSES, CALCULATE_INCOMES } from "../actions/actionTypes";

const initialState ={
    value: 0
}

const analyticsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CALCULATE_EXPENSES: return {...state, expenses: action.records.reduce((acc,c1)=>{return acc + Number(c1.amount)},0)}
        case CALCULATE_INCOMES:
        default: return state
    }
}
export default analyticsReducer