import { 
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS,
    CHANGE_PERIOD
} from "./actionTypes";

const differentiateRecords = (allRecords,start,end) =>{
    return{
        type: DIFFERENTIATE_RECORDS,
        records: allRecords,
        startDate:start,
        endDate:end
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

const changePeriod = (startDate,endDate)=>{
    return{
        type: CHANGE_PERIOD,
        startDate,
        endDate
    }
}

export {calculateExpenses,calculateIncomes,differentiateRecords,changePeriod}