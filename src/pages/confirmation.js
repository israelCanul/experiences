import { getTexto } from "../libs/language";
import Wheater from "../components/wheater";
import React from "react";
import { useQuery, useWheater } from "../hooks";
import Header from "../sections/header";
import BG from "../animations/fondoWeather.jpg";
import "../scss/confirmation.scss";
import { useState } from "react";
const Confirmation = () => {
  const query = useQuery();

  const [modalOpen, setModalOpen] = useState(true);

  //agree/disagree to take the meeting
  const weather = useWheater();
  return (
    <div
      className="confirmation"
      style={{ backgroundImage: "url(" + BG + ")" }}
    >
      <Header
        title={getTexto("This is what the weather is like in paradise today")}
        description={getTexto(
          "You can check here the forecast for the next days"
        )}
      />
      <div className="weather">
        <Wheater
          daysF={weather ? weather.listF : []}
          daysC={weather ? weather.listC : []}
          city={getTexto("Cancun")}
        />
      </div>
      <div className="actions">
        <a href="/">{getTexto("preference center")}</a>
      </div>
      <Modal
        agree={query && query.noagree ? query.noagree : false}
        open={modalOpen}
        toggleModal={setModalOpen}
      />
    </div>
  );
};

const Modal = ({ open = false, agree = true, toggleModal = () => {} }) => {
  return (
    <div className={`modal ${open === true ? "active" : "ss"}`}>
      <div className="modal_background"></div>
      <div className="modal_contenido">
        <div className="modal_action">
          <div
            className="close"
            onClick={() => {
              toggleModal(false);
            }}
          ></div>
        </div>
        {agree === false ? (
          <React.Fragment>
            <h3>{getTexto("Thank You")}!</h3>
            <p>
              {getTexto("Your appointment has been confirmed")}.<br />
              {getTexto(
                "You will receive a coupon for your selected experience upon completing the presentation"
              )}
              <br />
              <br />
            </p>
            <p>{getTexto("We look forward to welcoming you soon")}!</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{getTexto("Thank you for your reply")}!</h3>
            <p>
              {getTexto(
                "Your Concierge will be in contact soon to help you with your vacation plans."
              )}
              <br />
              <br />
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
