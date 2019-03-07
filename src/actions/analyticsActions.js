import { 
    CALCULATE_EXPENSES,
    CALCULATE_INCOMES,
    DIFFERENTIATE_RECORDS,
    CHANGE_PERIOD,
    CALCULATE_FILTERED_DATA,
    CALCULATE_DATE_DATA,
    CHANGE_FILTER
} from "./actionTypes";

const differentiateRecords = (allRecords,start,end) =>{
    return{
        type: DIFFERENTIATE_RECORDS,
        records: allRecords,
        startDate:start,
        endDate:end
    }
}

const calculateExpenses = (arr) =>{
    return{
        type: CALCULATE_EXPENSES,
        arr
    }
}

const calculateIncomes = (arr) =>{
    return{
        type: CALCULATE_INCOMES,
        arr
    }
}

const changePeriod = (startDate,endDate)=>{
    return{
        type: CHANGE_PERIOD,
        startDate,
        endDate
    }
}
const calculateDataByFilter = () =>{
    return{
        type: CALCULATE_FILTERED_DATA,
    }
}
const calculateDataByDate = () =>{
    return{
        type:  CALCULATE_DATE_DATA,
    }
}

const changeFilter = filter =>{
    return{
        type: CHANGE_FILTER,
        newFilter:filter
    }
}

export {calculateExpenses,calculateIncomes,differentiateRecords,changePeriod, calculateDataByFilter,changeFilter,calculateDataByDate}