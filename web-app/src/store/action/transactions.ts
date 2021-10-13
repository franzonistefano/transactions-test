import {EurRate, Transaction} from '../../interface/custom/Transactions'
import { TransactionsApi } from '../api/TransactionsApi'
import { statusApi } from '../statusApi'
import { GET_EUR_RATES, GET_TRANSACTIONS } from '../type/transactions'


export function storeTransactions(data: Transaction[] | null) {
    return { type: GET_TRANSACTIONS, data }
}

export function getTransactions() {
    return (dispatch: any) => {
        TransactionsApi.GetTransactions()
            .then((response: any) => {
                if (statusApi.CheckStatusGetSuccess(response.status)) return response.json()
                else if (
                  statusApi.checkForbidden(response.status) ||
                  statusApi.CheckStatusGetFailure(response.status)
                )
                  return null
                return null
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
                if (statusApi.CheckStatusGetSuccess(response.status)) return response.json()
                else if (
                  statusApi.checkForbidden(response.status) ||
                  statusApi.CheckStatusGetFailure(response.status)
                )
                  return null
                return null
            })
            .then((res: any) => {
                dispatch(storeEurRate(res))
            })
            .catch((err: any) => {

            })
    }
}