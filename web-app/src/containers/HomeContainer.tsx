import HomeComponent from "../components/custom/home/HomeComponent";
import { useTransactions } from "../hook/useTransactions";

const HomeContainer = (props: any) => {
  const { transactions, summarizeTx } = useTransactions();

  return (
    <>
      {transactions !== null && summarizeTx !== null && (
        <HomeComponent transactions={transactions} summarizes={summarizeTx} />
      )}
    </>
  );
};

export default HomeContainer;
