import _ from "lodash";
import {
  BTC,
  CHF,
  COMPLETED,
  DESPOSIT,
  EurRate,
  PENDING,
  Summarize,
  Transaction,
  USD,
  WITHDRAWAL,
} from "../interface/custom/Transactions";

export class TransactionUtil {
  static getTransactionData = (data: Transaction[], eurRate: EurRate) => {
    const transactions: Transaction[] = [];

    data.forEach((item: Transaction) => {
      const tx = item;
      switch (item.currency) {
        case BTC:
          tx.eurEq =
            eurRate.BTC === null
              ? null
              : TransactionUtil.getNumber2Decimal(eurRate.BTC * item.amount);
          break;
        case CHF:
          tx.eurEq =
            eurRate.CHF === null
              ? null
              : TransactionUtil.getNumber2Decimal(eurRate.CHF * item.amount);
          break;
        case USD:
          tx.eurEq =
            eurRate.USD === null
              ? null
              : TransactionUtil.getNumber2Decimal(eurRate.USD * item.amount);
          break;
        default:
          tx.eurEq = null;
          break;
      }
      transactions.push(tx);
    });
    return transactions;
  };

  static getNumber2Decimal = (value: number) => {
    return Math.round(value * 100) / 100;
  };

  static getSum = (data: Transaction[]) => {
    let tot = 0;
    data.forEach((tx: Transaction) => {
      tot += tx.amount;
    });
    return TransactionUtil.getNumber2Decimal(tot);
  };

  static getSummarizeData = (data: Transaction[], eurRate: EurRate) => {
    const currenciesType = [BTC, CHF, USD];
    const summarizeData: Summarize[] = [];

    currenciesType.forEach((currency: string) => {
      const sum: Summarize = {
        currency: currency,
        totWithdrawals: TransactionUtil.getSum(
          data
            .filter((x) => x.currency === currency)
            .filter((x) => x.type === WITHDRAWAL)
            .filter((x) => x.status === COMPLETED)
        ),
        totDeposits: TransactionUtil.getSum(
          data
            .filter((x) => x.currency === currency)
            .filter((x) => x.type === DESPOSIT)
            .filter((x) => x.status === COMPLETED)
        ),
        totPendingWithdrawals: TransactionUtil.getSum(
          data
            .filter((x) => x.currency === currency)
            .filter((x) => x.type === WITHDRAWAL)
            .filter((x) => x.status === PENDING)
        ),
        totPendingDeposits: TransactionUtil.getSum(
          data
            .filter((x) => x.currency === currency)
            .filter((x) => x.type === DESPOSIT)
            .filter((x) => x.status === PENDING)
        ),
        totBalance: TransactionUtil.getSum(
          data
            .filter((x) => x.currency === currency)
            .filter((x) => x.status === COMPLETED)
        ),
        totEur:
          _.get(eurRate, [currency]) === null
            ? null
            : TransactionUtil.getNumber2Decimal(
                TransactionUtil.getSum(
                  data
                    .filter((x) => x.currency === currency)
                    .filter((x) => x.status === COMPLETED)
                ) * _.get(eurRate, [currency])
              ),
      };
      summarizeData.push(sum);
    });

    return summarizeData;
  };
}
