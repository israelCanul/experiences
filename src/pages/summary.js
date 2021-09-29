import { getTexto, getLanguage } from "../libs/language";
import { useEffect, useState } from "react";
import Header from "../sections/header";
import TourDetail from "../components/tour_detail";
import ContinueSummary from "../components/continue_summary";
import AboutStay from "../components/about_your_stay";
import BookApointment from "../components/book_appointment";
import Collapser from "../components/collapser/collapser";
import "../scss/tour_summary.scss";
import { Redirect } from "react-router-dom";
import {
  checkForCookies,
  getCookieForm,
  saveParams,
} from "../libs/cookieManager";
import {
  useTourSelected,
  setDataMC,
  useQuery,
  useParamsContinue,
} from "../hooks";
import { getWavesFromCRM } from "../api";
import { formatingDateToCRM } from "../libs/helpers";
import Loading from "../components/loader/loading";

const Summary = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agree, setAgree] = useState(null);
  const [celebration, setCelebration] = useState("");
  const [book, setBook] = useState(null);
  const [waves, setWaves] = useState(null);
  const [loading, setloading] = useState(false);
  const useGetParams = useParamsContinue(null); //este hook obtiene la info de MC siempre y cuando existan los parametros GET
  const query = useQuery();
  const [tourSelected, setRefresh] = useTourSelected();
  useEffect(() => {
    if (query !== null) {
      //si hay parametros GET los almacenamos en las cookies correspondientes
      saveParams(query);
    }
    if (useGetParams !== null) {
      // si hay parametros obtenidos via api se solicita de nuevo el obtener el tour
      if (useGetParams.serviceID) {
        setRefresh(useGetParams.serviceID); // este medoto refresca el hook que modifica el tourSelected
      }
    }
  }, [query, useGetParams, setRefresh]);
  //obtenemos los appointments de acuerdo a la fecha seleccionada si el usario estuvo de acuerdo con los terminos y condiciones
  useEffect(() => {
    if (agree === true && waves === null) {
      const params = {
        checkIn: formatingDateToCRM(
          getCookieForm("checkInDate", getLanguage())
        ),
        checkOut: formatingDateToCRM(
          getCookieForm("checkOutDate", getLanguage())
        ),
        resort:
          getCookieForm("resort", getLanguage()) === "RH"
            ? "GRMT"
            : getCookieForm("resort", getLanguage()),
      };
      getWavesFromCRM(params).then((response) => {
        if (parseInt(response.data.code) >= 0) {
          setWaves(response.data.data.records);
        }
      });
    }
  }, [agree, waves]);

  // mandamos a guardar los parametros seleccionados por el usuario a la DT correspondiente
  const saveSelection = (e) => {
    e.preventDefault();
    setloading(true);
    const params = {
      ynAcceptT_C: agree,
      ContactID: getCookieForm("contactID", getLanguage()),
      PeopleID: getCookieForm("peopleID", getLanguage()),
      StayID: getCookieForm("stayID", getLanguage()),
      AppointmentDate: agree ? book.d + " 00:00:00 AM" : "",
      AppointmentTime: agree ? book.t : "",
      Celebration: celebration,
    };
    setDataMC(
      params,
      () => {
        //funcion callback pra cuando el guardado sea exitoso por parte de MC
        setloading(false);
        window.location = "/confirmation";
      },
      (err) => {
        setloading(false);
      }
    );
  };

  //validamos si exiten cookies o parametros necesarios para continuar
  if (!checkForCookies() || !getCookieForm("serviceID", getLanguage())) {
    if (query) {
      if (!query.contactID || !query.peopleID || !query.stayID) {
        return (
          <Redirect to="/error_page/?error=missing params on tour summary" />
        );
      } else if (useGetParams !== null) {
        if (useGetParams.length === 0) {
          return (
            <Redirect to="/error_page/?error=There are not any Data with the information passed" />
          );
        }
      }
    }
    //checamos que existan las cookies de info y servicio
  }

  if (tourSelected !== null && tourSelected !== "" && tourSelected !== false) {
    let tourS = tourSelected;
    return (
      <div className="summary">
        <Header
          title={getTexto("Plan ahead and enjoy an even better vacation!")}
          description={getTexto(
            "Choose your adventures now and use your time when you arrive to get a better tan on the beach"
          )}
        />
        <div className="title_summary">
          <div className="title">
            <h3>{tourS.ConverterDesc}</h3>
          </div>
          <div className="description">
            <p>
              {getTexto(
                "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay."
              )}
            </p>
          </div>
        </div>
        <TourDetail data={tourS} />
        <ContinueSummary
          setTerms={setAgreeTerms}
          agree={agree}
          setAgree={setAgree}
        />
        <Collapser active={agree && agreeTerms && waves && waves.length > 0}>
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
          {loading === false &&
          agree !== null &&
          celebration !== "" &&
          ((agree && book !== null) || !agree) ? (
            <a onClick={saveSelection.bind(this)} href="/">
              CONTINUE
            </a>
          ) : (
            ""
          )}
          {loading === true ? <Loading /> : ""}
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
