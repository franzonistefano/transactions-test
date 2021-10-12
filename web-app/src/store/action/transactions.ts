import {EurRate, Transaction} from '../../interface/custom/Transactions'
import { TransactionsApi } from '../api/TransactionsApi'
import { GET_EUR_RATES, GET_TRANSACTIONS } from '../type/transactions'


export function storeTransactions(data: Transaction[] | null) {
    return { type: GET_TRANSACTIONS, data }
}

export function getTransactions() {
    return (dispatch: any) => {
        TransactionsApi.GetTransactions()
            .then((response: any) => {
                if (response.status === 200)
                    return response.json()
            })
            .then((res: any) => {
                dispatch(storeTransactions(res !== null ? res.transactions : res))
            })
            .catch((err: any) => {

            })
    }
}

export function storeEurRate(data: EurRate | null) {
    return { type: GET_EUR_RATES, data }
}

export function getEurRate() {
    return (dispatch: any) => {
        TransactionsApi.GetEurRates()
            .then((response: any) => {
                if (response.status === 200)
                    return response.json()
            })
            .then((res: any) => {
                dispatch(storeEurRate(res))
            })
            .catch((err: any) => {

            })
    }
}