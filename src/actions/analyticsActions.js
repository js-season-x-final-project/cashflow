import { 
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS
} from "./actionTypes";

const differentiateRecords = allRecords =>{
    return{
        type: DIFFERENTIATE_RECORDS,
        records: allRecords
    }
}

const calculateExpenses = () =>{
    return{
        type: CALCULATE_EXPENSES,
    }
}

const calculateIncomes = () =>{
    return{
        type: CALCULATE_INCOMES,
    }
}

export {calculateExpenses,calculateIncomes,differentiateRecords}