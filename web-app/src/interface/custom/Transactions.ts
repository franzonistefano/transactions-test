export const BTC = 'BTC'
export const CHF = 'CHF'
export const USD = 'USD'

export const PENDING = 'pending'
export const COMPLETED = 'completed'

export const DESPOSIT = 'deposit'
export const WITHDRAWAL = 'withdrawal'

export interface Transaction {
    id: string
    timestamp: string
    type: string
    status: string
    currency: string
    amount: number
    eurEq?: number | null
}

export interface EurRate {
    BTC: number | null
    CHF: number | null
    USD: number | null
}

export interface Summarize {
    currency: string
    totWithdrawals: number
    totDeposits: number
    totPendingWithdrawals: number
    totPendingDeposits: number
    totBalance: number
    totEur: number | null
}