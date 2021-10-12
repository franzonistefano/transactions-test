import HomeComponent from "../components/custom/home/HomeComponent";
import { useTransactions } from "../hook/useTransactions";

const HomeContainer = (props: any) => {
  const { transactions, summarizeTx } = useTransactions();

  return (
    <>
      {transactions !== null && summarizeTx !== null ? (
        <HomeComponent transactions={transactions} summarizes={summarizeTx} />
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            <h1>No data available</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeContainer;
