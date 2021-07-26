import { getTexto } from "../libs/language";
import Wheater from "../components/wheater";

import { useWheater } from "../hooks";
import Header from "../sections/header";
import BG from "../animations/fondoWeather.jpg";
import "../scss/confirmation.scss";
const Confirmation = () => {
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
    </div>
  );
};

export default Confirmation;
