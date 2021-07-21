import Imagen from "../components/image";
import { getTexto } from "../libs/language";
const TourOnList = ({ data }) => {
  return (
    <div className="tour">
      <div className="info">
        <Imagen src={data.image} className="tour_image" />
        <h3>{data.name}</h3>
        <div className="price">
          <div className="price_item regular">
            {getTexto("Regular price")}: $82 USD
          </div>
          <div className="price_item special">
            {getTexto("Special price")}:
            <span className="special"> $47 USD</span>
          </div>
        </div>
      </div>
      <a href="/" className="select">
        {getTexto("Select Experience")}
      </a>
    </div>
  );
};
export default TourOnList;
