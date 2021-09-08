import Imagen from "../components/image";
import { getTexto, getLanguage } from "../libs/language";
import { saveParams } from "../libs/cookieManager";
import { useHistory } from "react-router-dom";
const TourOnList = ({ data }) => {
  let history = useHistory();
  const selectItem = (e) => {
    e.preventDefault();
    saveParams({ serviceID: data.ConverterID });
    history.push("/tour_summary");
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
