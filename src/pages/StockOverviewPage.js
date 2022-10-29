import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import trading from "../images/trading.png";

export const StockOverviewPage = () => {
  return (
    <div className="text-center">
      <img src={trading} />
      <AutoComplete />
      <StockList />
    </div>
  );
};
