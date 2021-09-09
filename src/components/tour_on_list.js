import Imagen from "../components/image";
import { getTexto, getLanguage } from "../libs/language";
import { saveParams, getCookieForm } from "../libs/cookieManager";
import { useHistory } from "react-router-dom";
import { setDataMC } from "../hooks";
import { parseJSON } from "date-fns";
const TourOnList = ({ data }) => {
  let history = useHistory();
  const selectItem = (e) => {
    e.preventDefault();

    //formato date 2017-09-15

    let params = {
      ConverterTrxID:
        getCookieForm("stayID", getLanguage()) +
        Math.floor(Math.random() * 100 + 1),
      ContactID: getCookieForm("contactID", getLanguage()),
      PeopleID: getCookieForm("peopleID", getLanguage()),
      StayID: getCookieForm("stayID", getLanguage()),
      ResID: getCookieForm("resID", getLanguage()),
      CheckInDate: getCookieForm("checkInDate", getLanguage()),
      Resort: getCookieForm("resort", getLanguage()),
      ConverterID: data.ConverterID,
    };

    setDataMC(params, () => {
      saveParams({ serviceID: data.ConverterID });
      history.push("/tour_summary");
    });
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
      <a href="/" onClick={selectItem.bind(this)} className="select">
        {getTexto("Select Experience")}
      </a>
    </div>
  );
};
export default TourOnList;
