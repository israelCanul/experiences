import { getTexto, getLanguage } from "../libs/language";
import { useEffect, useState } from "react";
import Header from "../sections/header";
import TourDetail from "../components/tour_detail";
import ContinueSummary from "../components/continue_summary";
import AboutStay from "../components/about_your_stay";
import BookApointment from "../components/book_appointment";
import Collapser from "../components/collapser";
import "../scss/tour_summary.scss";
import { Redirect } from "react-router-dom";
import { checkForCookies, getCookieForm } from "../libs/cookieManager";
import { useTourSelected } from "../hooks";
import { getWavesFromCRM } from "../api";
import { formatingDateToCRM } from "../libs/helpers";
import Loading from "../components/loader/loading";

const Summary = () => {
  const [agree, setAgree] = useState(null);
  const [celebration, setCelebration] = useState("");
  const [book, setBook] = useState(null);
  const [waves, setWaves] = useState(null);
  let tourSelected = useTourSelected();
  // let history = useHistory();
  useEffect(() => {
    if (agree === true && waves === null) {
      const params = {
        checkIn: formatingDateToCRM(
          getCookieForm("checkInDate", getLanguage())
        ),
        checkOut: formatingDateToCRM(
          getCookieForm("checkOutDate", getLanguage())
        ),
        resort: "RS",
      };
      getWavesFromCRM(params).then((response) => {
        if (parseInt(response.data.code) >= 0) {
          setWaves(response.data.data.records);
        }
      });
    }
  }, [agree, waves]);

  console.log(book);
  if (!checkForCookies() || !getCookieForm("serviceID", getLanguage())) {
    //checamos que existan las cookies de info y servicio
    return <Redirect to="/error_page/?error=missing params on tour summary" />;
  }
  if (tourSelected !== null && tourSelected !== "" && tourSelected !== false) {
    let tourS = tourSelected;
    return (
      <div className="summary">
        <Header
          title="Plan ahead and get a better vacation?"
          description="Choose your adventure now and use your time to get the perfect tan on the beach"
        />
        <div className="title_summary">
          <div className="title">
            <h3>{tourS.ConverterDesc}</h3>
          </div>
          <div className="description">
            <p>
              {getTexto(
                "No charge will be made to your credit card at this time. Your Vacation Package will be charged to your room account until you check out of your stay."
              )}
            </p>
          </div>
        </div>
        <TourDetail data={tourS} />
        <ContinueSummary agree={agree} setAgree={setAgree} />
        <Collapser active={agree && waves && waves.length > 0}>
          <BookApointment waves={waves} setBook={setBook} />
        </Collapser>
        {agree && waves === null ? (
          <div
            className="loader"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        ) : agree && waves.length < 1 ? (
          <div
            className="loader"
            style={{
              fontFamily: "Montserrat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 55, 124, 0.2)",
              maxWidth: "600px",
              margin: "0px auto",
              padding: "10px 0px",
            }}
          >
            There are no Appointments
          </div>
        ) : (
          ""
        )}

        <Collapser
          active={agree !== null && ((agree && book !== null) || !agree)}
        >
          <AboutStay
            celebration={celebration}
            setCelebration={setCelebration}
          />
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
  } else {
    return (
      <div className="summary skeleton">
        <Header
          title="Plan ahead and get a better vacation?"
          description="Choose your adventure now and use your time to get the perfect tan on the beach"
        />
        <div className="title_summary">
          <div className="section">
            <div className="info"></div>
          </div>
        </div>
        <TourDetail />
        <div className="section">
          <div className="info"></div>
        </div>
      </div>
    );
  }
};
export default Summary;
