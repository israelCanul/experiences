import { getTexto } from "../libs/language";
import Wheater from "../components/wheater";

import { useWheater } from "../hooks";
import Header from "../sections/header";
import BG from "../animations/fondoWeather.jpg";
import "../scss/confirmation.scss";
import { useState } from "react";
const Confirmation = () => {
  const [modalOpen, setModalOpen] = useState(true);
  //agree/disagree to take the meeting
  const weather = useWheater();
  return (
    <div
      className="confirmation"
      style={{ backgroundImage: "url(" + BG + ")" }}
    >
      <Header
        title="This is what the weather is like in paradise toda"
        description="You can check here the forecast for the next days"
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
      <Modal open={modalOpen} toggleModal={setModalOpen} />
    </div>
  );
};

const Modal = ({ open = false, toggleModal = () => {} }) => {
  console.log(open);
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
        <h3>{getTexto("Thank You")}!</h3>
        <p>
          {getTexto("Your reservation has been placed")}.<br />
          {getTexto(
            "Please read the details of your reservation found on your confirmation email"
          )}
          <br />
          {`${getTexto("Email sent: ")} `}
          <br />
        </p>
        <p>{getTexto("We look forward to welcoming you soon")}!</p>
      </div>
    </div>
  );
};

export default Confirmation;
