import { getTexto } from "../libs/language";
import { useState } from "react";
import Header from "../sections/header";
import TourDetail from "../components/tour_detail";
import ContinueSummary from "../components/continue_summary";
import AboutStay from "../components/about_your_stay";
import BookApointment from "../components/book_appointment";
import Collapser from "../components/collapser";
import "../scss/tour_summary.scss";
const Summary = () => {
  //agree/disagree to take the meeting
  const [agree, setAgree] = useState(null);
  const [celebration, setCelebration] = useState("");
  const [book, setBook] = useState(null);

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
      <ContinueSummary agree={agree} setAgree={setAgree} />
      <Collapser active={agree}>
        <BookApointment setBook={setBook} />
      </Collapser>
      <Collapser
        active={agree !== null && ((agree && book !== null) || !agree)}
      >
        <AboutStay celebration={celebration} setCelebration={setCelebration} />
      </Collapser>
      <div className="actions active">
        {agree !== null &&
        celebration !== "" &&
        ((agree && book !== null) || !agree) ? (
          <a href="/">Continue</a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Summary;
