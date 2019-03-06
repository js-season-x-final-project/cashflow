import {
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS,
    CHANGE_PERIOD,
    CALCULATE_FILTERED_DATA
} from "../actions/actionTypes";

let startDate = new Date(new Date().setDate(-31))
startDate = startDate.getTime();
const initialState = {
    incomeRecords: [],
    expenseRecords: [],
    incomes: [],
    expenses: [],
    startDate,
    endDate: Date.now(),
    filtered:{
        labels:[],
        values:[]
    }
}

const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIFFERENTIATE_RECORDS: return {
            ...state,
            incomeRecords: action.records.filter(rec => {
                let na = new Date(rec.date).getTime();
                return rec.type === 'income' && na >= action.startDate && na <= action.endDate
            }),
            expenseRecords:[...action.records.filter(rec => {
                let na = new Date(rec.date).getTime();
                return rec.type === 'expense' && na >= action.startDate && na <= action.endDate
            }).sort((rec1,rec2)=> {return rec1.date > rec2.date})]
        }
        case CALCULATE_EXPENSES: return { ...state, expenses: state.expenseRecords.reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CALCULATE_INCOMES: return { ...state, incomes: state.incomeRecords.reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CHANGE_PERIOD: return { ...state, startDate: action.startDate, endDate: action.endDate }
        case CALCULATE_FILTERED_DATA: return {
            ...state, filtered: {
                labels: [...new Set(state.expenseRecords.map(expense => expense[action.filter]))].sort((c1,c2)=>c1>c2),
                values: [...new Set(state.expenseRecords.map(expense => expense[action.filter]))].map(label => {
                    return state.expenseRecords.reduce((acc, record) => {
                        return record[action.filter] === label ? acc + Number(record.amount) : acc
                    }, 0)
                })
            }
        }
        default: return state
    }
}
export default analyticsReducer