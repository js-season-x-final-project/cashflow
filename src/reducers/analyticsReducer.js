import {
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS,
    CHANGE_PERIOD,
    CALCULATE_FILTERED_DATA,
    CHANGE_FILTER,
    CALCULATE_DATE_DATA
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
    },
    currentFilter: 'subCategory',
    filteredByData:{
        labelsForExpenses:[],
        valuesForExpenses:[],
        labelsForIncomes:[],
        valuesForIncomes:[]
    }
}

const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIFFERENTIATE_RECORDS: return {
            ...state,
            incomeRecords: action.records.filter(rec => {
                let na = new Date(rec.date).getTime();
                return rec.type === 'income' && na >= action.startDate && na <= action.endDate
            }).sort((rec1,rec2)=> {return rec1.date > rec2.date ? 1 : -1}),
            expenseRecords:[...action.records.filter(rec => {
                let na = new Date(rec.date).getTime();
                return rec.type === 'expense' && na >= action.startDate && na <= action.endDate
            }).sort((rec1,rec2)=> {return rec1.date > rec2.date ? 1 : -1})]
        }
        case CALCULATE_EXPENSES: return { ...state, expenses: action.arr.filter(c1=>c1.type==='expense').reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CALCULATE_INCOMES: return { ...state, incomes: action.arr.filter(c1=>c1.type==='income').reduce((acc, c1) => { return acc + Number(c1.amount) }, 0) }
        case CHANGE_PERIOD: return { ...state, startDate: action.startDate, endDate: action.endDate }
        case CALCULATE_FILTERED_DATA: return {
            ...state, filtered: {
                labels: [...new Set(state.expenseRecords.map(expense => expense[state.currentFilter]))],
                values: [...new Set(state.expenseRecords.map(expense => expense[state.currentFilter]))].map(label => {
                    return state.expenseRecords.reduce((acc, record) => {
                        return record[state.currentFilter] === label ? acc + Number(record.amount) : acc
                    }, 0)
                })
            }
        }
        case CALCULATE_DATE_DATA:return {
            ...state, filteredByData: {
                labelsForExpenses: [...new Set(state.expenseRecords.map(expense => expense.date))],
                valuesForExpenses: [...new Set(state.expenseRecords.map(expense => expense.date))].map(label => {
                    return state.expenseRecords.reduce((acc, record) => {
                        return record.date === label ? acc + Number(record.amount) : acc
                    }, 0)
                }),
                labelsForIncomes: [...new Set(state.incomeRecords.map(income => income.date))],
                valuesForIncomes: [...new Set(state.incomeRecords.map(income => income.date))].map(label => {
                    return state.incomeRecords.reduce((acc, record) => {
                        return record.date === label ? acc + Number(record.amount) : acc
                    }, 0)
                })
            }
        }
        case CHANGE_FILTER: return {...state,currentFilter:action.newFilter}
        default: return state
    }
}
export default analyticsReducer