import Imagen from "../components/image";
import { getTexto, getLanguage } from "../libs/language";
import { saveParams, getCookieForm } from "../libs/cookieManager";
import { useHistory } from "react-router-dom";
import { setDataMC } from "../hooks";
import Loading from "./loader/loading";
import { useState } from "react";

const TourOnList = ({ data }) => {
  let history = useHistory();
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState("");

  const selectItem = (e) => {
    e.preventDefault();
    setSelected(true);
    let params = {
      ContactID: getCookieForm("contactID", getLanguage()),
      PeopleID: getCookieForm("peopleID", getLanguage()),
      StayID: getCookieForm("stayID", getLanguage()),
      ResID: getCookieForm("resID", getLanguage()),
      CheckInDate: getCookieForm("checkInDate", getLanguage()),
      CheckOutDate: getCookieForm("checkOutDate", getLanguage()),
      Resort: getCookieForm("resort", getLanguage()),
      ConverterID: data.ConverterID,
    };
    setDataMC(
      params,
      () => {
        setSelected(false);
        saveParams({ serviceID: data.ConverterID });
        history.push("/tour_summary");
      },
      (err) => {
        setError(err);
      }
    );
  };

  return (
    <div className="tour">
      <div className="info">
        <Imagen
          src={
            data.ConverterImage !== ""
              ? data.ConverterImage
              : "/img/default.png"
          }
          className="tour_image"
        />
        <h3>
          {getLanguage() === "es-MX"
            ? data.ConverterDescSpa
            : data.ConverterDescEng}
        </h3>
        <div className="price">
          <div className="price_item regular">
            {getTexto("Regular price")}: ${data.ConverterRegularPrice} USD
          </div>
          <div className="price_item special">
            {getTexto("Special price")}:
            <span className="special"> ${data.ConverterSpecialPrice} USD</span>
          </div>
        </div>
      </div>
      {error !== "" ? <div className="error">{error}</div> : ""}
      {selected === true ? (
        <Loading />
      ) : (
        <a href="/" onClick={selectItem.bind(this)} className="select">
          {getTexto("Select Experience")}
        </a>
      )}
    </div>
  );
};
export default TourOnList;
