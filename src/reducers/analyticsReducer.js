import {
     CALCULATE_EXPENSES,
     CALCULATE_INCOMES,
     DIFFERENTIATE_RECORDS
    } from "../actions/actionTypes";

const initialState ={
    incomeRecords: [],
    expenseRecords: [],
    incomes: [],
    expenses: []
}

const analyticsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case DIFFERENTIATE_RECORDS: return {...state, incomeRecords: action.records.filter(rec=>rec.type==='income'),expenseRecords: action.records.filter(rec=>rec.type==='expense')}
        case CALCULATE_EXPENSES: return {...state, expenses: state.expenseRecords.reduce((acc,c1)=>{return acc + Number(c1.amount)},0)}
        case CALCULATE_INCOMES: return {...state, incomes: state.incomeRecords.reduce((acc,c1)=>{return acc + Number(c1.amount)},0)}  
        default: return state
    }
}
export default analyticsReducer