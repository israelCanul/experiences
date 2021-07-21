import { getTexto } from "../libs/language";
import Header from "../sections/header";
import TourDetail from "../components/tour_detail";
import ContinueSummary from "../components/continue_summary";
import "../scss/tour_summary.scss";
const Summary = () => {
  return (
    <div className="summary">
      <Header
        title="Plan ahead and get a better vacation?"
        description="Choose your adventure now and use your time to get the perfect tan on the beach"
      />
      <div className="title_summary">
        <div className="title">
          <h3>{getTexto("Tour summary")}</h3>
        </div>
        <div className="description">
          <p>
            {getTexto(
              "No charge will be made to your credit card at this time. Your Vacation Package will be charged to your room account until you check out of your stay."
            )}
          </p>
        </div>
      </div>
      <TourDetail />
      <ContinueSummary />
    </div>
  );
};
export default Summary;
