import "../../../assets/theme/custom-theme.scss";
import { Summarize, Transaction } from "../../../interface/custom/Transactions";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FormattedDate } from "react-intl";

export interface HomepageProps {
  transactions: Transaction[] | null;
  summarizes: Summarize[] | null;
}

const HomeComponent = ({ transactions, summarizes }: HomepageProps) => {
  const eurEqTemplate = (rowData: Transaction) => {
    return rowData.eurEq === null || rowData.eurEq === undefined
      ? "-"
      : rowData.eurEq;
  };

  const dataTemplate = (rowData: Transaction) => {
    return (
      <FormattedDate
        value={rowData.timestamp}
        year="numeric"
        month="long"
        day="numeric"
      />
    );
  };

  const totEurTemplate = (rowData: Summarize) => {
    return rowData.totEur === null || rowData.totEur === undefined
      ? "-"
      : rowData.totEur;
  };

  return (
    <div className="row d-flex justify-content-center">
      {/* First Table */}
      <div className="col-12 mt-4 text-center">
        <h1>Transaction Table</h1>
      </div>
      <div className="col-10 mb-4">
        {transactions !== null && (
          <DataTable value={transactions}>
            <Column header="Timestamp" body={dataTemplate}></Column>
            <Column field="currency" header="Currency"></Column>
            <Column field="amount" header="Amount"></Column>
            <Column header="Eur equiv" body={eurEqTemplate}></Column>
            <Column field="type" header="Type"></Column>
            <Column field="status" header="Status"></Column>
          </DataTable>
        )}
      </div>

      {/* Second Table */}
      <div className="col-12 mt-4 text-center">
        <h1>Summarized Table</h1>
      </div>
      <div className="col-10 mb-4">
        {summarizes !== null && (
          <DataTable value={summarizes}>
            <Column field="currency" header="Currency"></Column>
            <Column
              field="totWithdrawals"
              header="total completed withdrawals"
            ></Column>

            <Column
              field="totDeposits"
              header="total completed deposits"
            ></Column>
            <Column
              field="totPendingWithdrawals"
              header="total pending withdrawals"
            ></Column>
            <Column
              field="totPendingDeposits"
              header="total pending deposits"
            ></Column>
            <Column
              field="totBalance"
              header="total balance (completed deposits - completed withdrawals)"
            ></Column>
            <Column
              header="total balance eur equiv"
              body={totEurTemplate}
            ></Column>
          </DataTable>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
