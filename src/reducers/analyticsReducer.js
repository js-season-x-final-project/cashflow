import {
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS,
    CHANGE_PERIOD
} from "../actions/actionTypes";

let startDate = new Date(new Date().setDate(-31))
startDate = startDate.getTime();
const initialState = {
    incomeRecords: [],
    expenseRecords: [],
    incomes: [],
    expenses: [],
    startDate,
    endDate: Date.now()

}

const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIFFERENTIATE_RECORDS: return {
            ...state,
            incomeRecords: action.records.filter(rec => rec.type === 'income' && rec.date <= action.startDate && rec.date >= action.endDate),
            expenseRecords: action.records.filter(rec => {
                // console.log(rec.type === 'expense' && rec.date >= action.startDate && rec.date <= action.endDate);
                let na = new Date(rec.date).getTime();
                return rec.type === 'expense' && na >= action.startDate && na <= action.endDate
            })
        }
        case CALCULATE_EXPENSES: return { ...state, expenses: state.expenseRecords.reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CALCULATE_INCOMES: return { ...state, incomes: state.incomeRecords.reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CHANGE_PERIOD: return { ...state, startDate: action.startDate, endDate: action.endDate }
        default: return state
    }
}
export default analyticsReducer