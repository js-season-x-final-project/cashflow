import { CALCULATE_EXPENSES } from "./actionTypes";

const calculateExpenses = someArray =>{
    return{
        type: CALCULATE_EXPENSES,
        records: someArray
    }
}

export {calculateExpenses}