import { Api } from '../Api'

export class TransactionsApi {
    static TRANSACTIONS_ENDP: string = '/transactions'

    static EUR_RATE_ENDP: string = '/eur-rates'

    static GetTransactions = () => {
        return Api.Get(TransactionsApi.TRANSACTIONS_ENDP)
    }

    static GetEurRates = () => {
        return Api.Get(TransactionsApi.EUR_RATE_ENDP)
    }
}