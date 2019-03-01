import {
    ADD_RECORD
} from './actionTypes';

export const addRecord = record => {
    return {
        type: ADD_RECORD,
        key: record.key,
        value: record.value
    }
}