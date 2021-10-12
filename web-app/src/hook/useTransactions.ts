import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Summarize, Transaction } from "../interface/custom/Transactions";
import { getEurRate, getTransactions } from "../store/action/transactions";
import { TransactionUtil } from "../utils/TransactionUtil";

export function useTransactions() {
    const dispatch = useDispatch()

    const [transactions, setTransactions] = useState<Transaction[] | null>(null);
    const [summarizeTx, setSummarizeTx] = useState<Summarize[] | null>(null);
  
    const getTx = useCallback(() => dispatch(getTransactions()), [dispatch]);
  
    const getEurValue = useCallback(() => dispatch(getEurRate()), [dispatch]);
  
    const tx = useSelector(
      (state: any) => state.transactionsReducer.transactions
    );
  
    const eurRate = useSelector(
      (state: any) => state.transactionsReducer.eurRates
    );
  
    useEffect(() => {
      getTx();
      getEurValue();
    }, []);
  
    useEffect(() => {
      if (tx !== null && eurRate !== null) {
        setTransactions(TransactionUtil.getTransactionData(tx, eurRate));
        setSummarizeTx(TransactionUtil.getSummarizeData(tx, eurRate));
      }
    }, [tx, eurRate]);

    return {
        transactions,
        summarizeTx
    }
}