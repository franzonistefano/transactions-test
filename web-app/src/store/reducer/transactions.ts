/* eslint-disable import/no-anonymous-default-export */
import {Transaction, EurRate} from "../../interface/custom/Transactions"
import { GET_EUR_RATES, GET_TRANSACTIONS } from "../type/transactions"

export interface TransactionState {
    transactions: Transaction[] | null
    eurRates: EurRate | null
}

const defaultState: TransactionState = {
    transactions: null,
    eurRates: null
}

export default (state = defaultState, action:any) => {
    switch(action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.data
            }
        case GET_EUR_RATES:
            return {
                ...state,
                eurRates: action.data
            }
        default:
            return state
    }
}